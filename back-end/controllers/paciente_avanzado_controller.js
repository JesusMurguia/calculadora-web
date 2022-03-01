const PacienteAvanzadoModel = require("../models/paciente_avanzado_model");
const pacienteModel = require("../models/paciente_model");
const metabolitosModel = require("../models/metabolitos_model");
const genetic_score_model = require("../models/genetic_score_model");

class PacienteAvanzadoController {
  constructor() {
    this.pacienteAvanzadoModel = new PacienteAvanzadoModel();
    this.pacienteModel = new pacienteModel();
    this.metabolitosModel = new metabolitosModel();
    this.genetic_score_model = new genetic_score_model();
  }
  find = async () => {
    try {
      const result = await this.pacienteAvanzadoModel.find();
      return result;
    } catch (err) {
      return err;
    }
  };
  findById = async (id) => {
    try {
      const result = await this.pacienteAvanzadoModel.findById(id);
      return result;
    } catch (err) {
      return err;
    }
  };
  create = async (data) => {
    try {
      const paciente = await this.pacienteModel.create(data);
      paciente.resultadoCigarrillosDiarios =
        this.pacienteModel.cigarrillosDiaDiagnostico(paciente.cigarrillosDia);
      let result = await this.pacienteAvanzadoModel.create(paciente);
      result = await this.metabolitosModel.create(paciente);
      result = await this.genetic_score_model.create(paciente);

      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  update = async (id, data) => {
    try {
      const result = await this.pacienteAvanzadoModel.update(id, data);
      return result;
    } catch (err) {
      return err;
    }
  };
  delete = async (id) => {
    try {
      const result = await this.pacienteAvanzadoModel.delete(id);
      return result;
    } catch (err) {
      return err;
    }
  };
}

module.exports = PacienteAvanzadoController;
