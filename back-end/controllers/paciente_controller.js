const PacienteModel = require("../models/paciente_model");

class PacienteController {
  constructor() {
    this.pacienteModel = new PacienteModel();
  }
  find = async () => {
    try {
      const result = await this.pacienteModel.find();
      return result;
    } catch (err) {
      return err;
    }
  };
  findById = async (id) => {
    try {
      const result = await this.pacienteModel.findById(id);
      return result;
    } catch (err) {
      return err;
    }
  };
  create = async (data) => {
    try {
      const result = await this.pacienteModel.create(data);
      return result;
    } catch (err) {
      return err;
    }
  };
  update = async (id, data) => {
    try {
      const result = await this.pacienteModel.update(id, data);
      return result;
    } catch (err) {
      return err;
    }
  };
  delete = async (id) => {
    try {
      const result = await this.pacienteModel.delete(id);
      return result;
    } catch (err) {
      return err;
    }
  };
}

module.exports = PacienteController;
