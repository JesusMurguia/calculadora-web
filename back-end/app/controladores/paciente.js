

const Paciente = require('../modelos/Paciente.js');
const sql = require("../modelos/db");

module.exports = {
  create: async (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido vacio"
      });
    }
    const { id, edad, edadFumador, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas } = req.body;
    const newPaciente = new Paciente(
      id,
      edad, 
      edadFumador, 
      genero, 
      cigarrillosDia, 
      puntos, 
      dependencia, 
      recomendaciones,
      respuestas
    );
    newPaciente.diagnostico();
	
    // se verifica el token del paciente
    const {OAuth2Client} = require('google-auth-library');
    const CLIENT_ID = '30485697553-eob4q0k7hv5p3k48jqls98kv5n3pglk6.apps.googleusercontent.com';
    const client = new OAuth2Client(CLIENT_ID);
    const token = newPaciente.id;
    async function verify() {
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];

      // se inserta al paciente en la base de datos, si el paciente ya tiene un registro en la base de dato no se inserta y solamente regresa el diagnostico
      sql.promise().query("INSERT INTO paciente SET ?", {
        idpaciente: userid,
        edad: newPaciente.edad,
        edadFumador: newPaciente.edadFumador,
        genero: newPaciente.genero,
        cigarrillosDia: newPaciente.cigarrillosDia,
        puntos: newPaciente.puntos,
        dependencia: newPaciente.dependencia,
        recomendaciones: newPaciente.recomendaciones,
      }).then(data => {
        res.status(200).send(newPaciente);
      }).catch(error => {
        res.status(200).send(newPaciente);
      });
    }
    verify().catch(console.error);
  },
  result: async (req, res) => {

    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido vacio"
      });
    }
    const { id, edad, edadFumador, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas } = req.body;
    const newPaciente = new Paciente(
      id,
      edad, 
      edadFumador, 
      genero, 
      cigarrillosDia, 
      puntos, 
      dependencia, 
      recomendaciones,
      respuestas
    );
    newPaciente.diagnostico();
  
    res.status(200).send(newPaciente);
  },
test: async (req, res) => {
    res.status(200).send({
      message: "Test"
    });
  }
};
