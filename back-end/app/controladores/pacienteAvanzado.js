const Paciente = require("../modelos/PacienteAvanzado");
const sql = require("../modelos/db");
const validacionMetabolitos = require("../modelos/validacionMetabolitos");

module.exports = {
  create: async (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido vacio",
      });
    }
    const {
      id,
      edad,
      edadFumador,
      genero,
      cigarrillosDia,
      metabolitos,
      variacionGenetica,
    } = req.body;
    const newPaciente = new Paciente(
      id,
      edad,
      edadFumador,
      genero,
      cigarrillosDia,
      metabolitos,
      variacionGenetica
    );

    // se genera nivel de riesgo por cada metabolito
    newPaciente.resultadoMetabolitos = validacionMetabolitos(metabolitos);

    // se verifica el token del paciente
    const { OAuth2Client } = require("google-auth-library");
    const CLIENT_ID =
      "30485697553-eob4q0k7hv5p3k48jqls98kv5n3pglk6.apps.googleusercontent.com";
    const client = new OAuth2Client(CLIENT_ID);
    const token = newPaciente.id;
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];

      // se inserta al paciente en la base de datos, si el paciente ya tiene un registro en la base de dato no se inserta y solamente regresa el diagnostico
      sql
        .promise()
        .query("INSERT INTO paciente SET ?", {
          idpaciente: userid,
          edad: newPaciente.edad,
          edadFumador: newPaciente.edadFumador,
          genero: newPaciente.genero,
          cigarrillosDia: newPaciente.cigarrillosDia,
        })
        .then((data) => {
          sql
            .promise()
            .query(
              "INSERT INTO metabolitos (`idpaciente`, `3HC-0-Gluc`, `Cotinine-N-Gluc`, `3HC`, `Cotinine`, `Nicotine`, `Nicotine-N-Gluc`, `4HPBA`, `Cotinine-oxide`, `Nicotine-N-oxide`) VALUES (?,?,?,?,?,?,?,?,?,?)",
              [
                userid,
                newPaciente.resultadoMetabolitos[0],
                newPaciente.resultadoMetabolitos[1],
                newPaciente.resultadoMetabolitos[2],
                newPaciente.resultadoMetabolitos[3],
                newPaciente.resultadoMetabolitos[4],
                newPaciente.resultadoMetabolitos[5],
                newPaciente.resultadoMetabolitos[6],
                newPaciente.resultadoMetabolitos[7],
                newPaciente.resultadoMetabolitos[8],
              ]
            )
            .then((data) => {
              res.status(200).send(newPaciente);
            })
            .catch((err) => {
              res.status(500).send({
                message: err.message || "Error al crear el paciente avanzado",
              });
            });
        })
        .catch((error) => {
          console.log(error);
          //el paciente ya existe asi que se regresa el diagnostico sin insertarlo
          res.status(200).send(newPaciente);
        });
    }
    verify().catch(console.error);
  },
  result: async (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Contenido vacio",
      });
    }
    const {
      id,
      edad,
      edadFumador,
      genero,
      cigarrillosDia,
      puntos,
      dependencia,
      recomendaciones,
      respuestas,
    } = req.body;
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
      message: "Test",
    });
  },
};
