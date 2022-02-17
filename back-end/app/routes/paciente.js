module.exports = app => {
    const paciente = require("../controladores/pacienteBasico");
    let router = require("express").Router();

    router.post("/", paciente.create);
    router.post("/skip", paciente.result);
    app.use("/api/pacienteBasico", router);
  };
