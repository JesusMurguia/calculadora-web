const PacienteBasicoModel = require("../models/paciente_basico_model");
const pacienteModel = require("../models/paciente_model");

class PacienteBasicoController {
	constructor() {
		this.pacienteBasicoModel = new PacienteBasicoModel();
		this.pacienteModel = new pacienteModel();
	}
	find = async () => {
		try {
			const result = await this.pacienteBasicoModel.find();
			return result;
		} catch (err) {
			return err;
		}
	};
	findById = async (id) => {
		try {
			const result = await this.pacienteBasicoModel.findById(id);
			return result;
		} catch (err) {
			return err;
		}
	};
	create = async (data) => {
		try {
			const paciente = await this.pacienteModel.create(data);
			const result = await this.pacienteBasicoModel.create(paciente);
			return result;
		} catch (err) {
			return err;
		}
	};
	update = async (id, data) => {
		try {
			const result = await this.pacienteBasicoModel.update(id, data);
			return result;
		} catch (err) {
			return err;
		}
	};
	delete = async (id) => {
		try {
			const result = await this.pacienteBasicoModel.delete(id);
			return result;
		} catch (err) {
			return err;
		}
	};
}

module.exports = PacienteBasicoController;
