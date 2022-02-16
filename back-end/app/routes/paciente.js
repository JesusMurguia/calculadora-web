module.exports = app => {
    const paciente = require("../controladores/pacienteBasico");
    let router = require("express").Router();

    router.post("/", paciente.create);
    router.post("/skip", paciente.result);
router.get("/test", paciente.test);
    app.use("/api/paciente", router);
  };
