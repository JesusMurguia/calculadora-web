module.exports = app => {
    const paciente = require("../controladores/paciente");
    let router = require("express").Router();

    router.post("/", paciente.create);
    router.post("/skip", paciente.result);
    app.use("/api/paciente", router);
  };