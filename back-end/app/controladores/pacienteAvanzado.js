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
      // se inserta al paciente en la base de datos, si el paciente ya tiene un registro en la base de datos se actualiza
      sql
        .promise()
        .query("INSERT INTO paciente SET ? ON DUPLICATE KEY UPDATE `edad` = ?, `edadFumador` = ?, `genero` = ?, `cigarrillosDia` = ?", [
          {
            idpaciente: userid,
            edad: newPaciente.edad,
            edadFumador: newPaciente.edadFumador,
            genero: newPaciente.genero,
            cigarrillosDia: newPaciente.cigarrillosDia,
          },
          newPaciente.edad,
          newPaciente.edadFumador,
          newPaciente.genero,
          newPaciente.cigarrillosDia,
        ])
        .then((data) => {
          sql.promise().query("INSERT INTO paciente_avanzado SET ? ON DUPLICATE KEY UPDATE `idpaciente` = `idpaciente` ", [
            {
              idpaciente: userid,
            },
          ]).then((data) => {
            sql
            .promise()
            .query(
              "INSERT INTO metabolitos (`idpaciente`, `3HC-0-Gluc`, `Cotinine-N-Gluc`, `3HC`, `Cotinine`, `Nicotine`, `Nicotine-N-Gluc`, `4HPBA`, `Cotinine-oxide`, `Nicotine-N-oxide`) VALUES (?,?,?,?,?,?,?,?,?,?) on duplicate key update `3HC-0-Gluc` = ?, `Cotinine-N-Gluc` = ?, `3HC` = ?, `Cotinine` = ?, `Nicotine` = ?, `Nicotine-N-Gluc` = ?, `4HPBA` = ?, `Cotinine-oxide` = ?, `Nicotine-N-oxide` = ?",
              [
                userid,
                newPaciente.metabolitos[0],
                newPaciente.metabolitos[1],
                newPaciente.metabolitos[2],
                newPaciente.metabolitos[3],
                newPaciente.metabolitos[4],
                newPaciente.metabolitos[5],
                newPaciente.metabolitos[6],
                newPaciente.metabolitos[7],
                newPaciente.metabolitos[8],
                newPaciente.metabolitos[0],
                newPaciente.metabolitos[1],
                newPaciente.metabolitos[2],
                newPaciente.metabolitos[3],
                newPaciente.metabolitos[4],
                newPaciente.metabolitos[5],
                newPaciente.metabolitos[6],
                newPaciente.metabolitos[7],
                newPaciente.metabolitos[8],
              ]
            )
            .then((data) => {
              console.log("ass",data);
              res.status(200).send(newPaciente);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).send({
                message: err.message || "Error al crear el paciente avanzado",
              });
            });
          }).catch((err) => {
            console.log(err);
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
