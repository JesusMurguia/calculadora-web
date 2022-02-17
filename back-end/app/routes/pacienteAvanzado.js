module.exports = app => {
    const paciente = require("../controladores/pacienteAvanzado");
    let router = require("express").Router();

    router.post("/", paciente.create);
    app.use("/api/pacienteAvanzado", router);
  };
