const PacienteAvanzadoModel = require("../models/paciente_avanzado_model");
const pacienteModel = require("../models/paciente_model");
const metabolitosModel = require("../models/metabolitos_model");
const genetic_score_model = require("../models/genetic_score_model");
const metabolitos_riesgoModel = require("../models/metabolitos_riesgo_model");

class PacienteAvanzadoController {
	constructor() {
		this.pacienteAvanzadoModel = new PacienteAvanzadoModel();
		this.pacienteModel = new pacienteModel();
		this.metabolitosModel = new metabolitosModel();
		this.genetic_score_model = new genetic_score_model();
		this.metabolitos_riesgoModel = new metabolitos_riesgoModel();
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
			paciente.resultadoCigarrillosDiarios = this.pacienteModel.cigarrillosDiaDiagnostico(paciente.cigarrillosDia);
			let result = await this.pacienteAvanzadoModel.create(paciente);
			result = await this.metabolitosModel.create(paciente);
			result.resultadoMetabolitos = this.metabolitosModel.diagnostico(result.metabolitos);
			result = await this.metabolitos_riesgoModel.create(result);
			result = await this.genetic_score_model.create(paciente);
			return result;
		} catch (err) {
			console.log(err);
			return err;
		}
	};
	createBulk = async (data) => {
		try {
			const pacientesBasicos = [];
			const pacientesAvanzados = [];
			const metabolitos = [];
			const metabolitos_riesgo = [];
			const genetic_score = [];

			data.forEach((paciente, index) => {
				pacientesBasicos.push([
					paciente.idpaciente ? paciente.idpaciente.toString() : `paciente${index}`,
					paciente.edad ? Number(paciente.edad) : index,
					paciente.edadFumador ? Number(paciente.edadFumador) : index,
					paciente.genero ? paciente.genero.toString() : "n",
					paciente.cigarrillosDia ? Number(paciente.cigarrillosDia) : 0,
					paciente.cigarrillosDia ? this.pacienteModel.cigarrillosDiaDiagnostico(paciente.cigarrillosDia) : "Bajo",
				]);

				pacientesAvanzados.push([paciente.idpaciente ? paciente.idpaciente.toString() : `paciente${index}`]);

				metabolitos.push([
					paciente.idpaciente ? paciente.idpaciente.toString() : `paciente${index}`,
					paciente["3HC_O_Gluc"] ? Number(paciente["3HC_O_Gluc"]) : 0,
					paciente["3HC"] ? Number(paciente["3HC"]) : 0,
					paciente["Nicotine_N_Gluc"] ? Number(paciente["Nicotine_N_Gluc"]) : 0,
					paciente["4HPBA"] ? Number(paciente["4HPBA"]) : 0,
					paciente["Cotinine_oxide"] ? Number(paciente["Cotinine_oxide"]) : 0,
					paciente["Nicotine_N_oxide"] ? Number(paciente["Nicotine_N_oxide"]) : 0,
				]);

				metabolitos_riesgo.push([
					paciente.idpaciente ? paciente.idpaciente.toString() : `paciente${index}`,
					...this.metabolitosModel.diagnostico(metabolitos[index].slice(1)),
				]);

				genetic_score.push([
					paciente.idpaciente ? paciente.idpaciente.toString() : `paciente${index}`,
					paciente.rs2431413 ? Number(paciente.rs2431413) : 1,
					paciente.rs140122859 ? Number(paciente.rs140122859) : 1,
					paciente.rs503464 ? Number(paciente.rs503464) : 1,
					paciente.rs637137 ? Number(paciente.rs637137) : 1,
					paciente.rs578776 ? Number(paciente.rs578776) : 1,
					paciente.rs167771 ? Number(paciente.rs167771) : 1,
					paciente.rs1800822 ? Number(paciente.rs1800822) : 1,
				]);

				let total = Number(
					genetic_score[index]
						.slice(1)
						.reduce((a, b) => a * b, 1)
						.toFixed(4)
				);

				genetic_score[index].push(total);

				genetic_score[index].push(this.genetic_score_model.validacionVariacionGenetica(total));
			});

			await this.pacienteModel.createBulk(pacientesBasicos);
			await this.pacienteAvanzadoModel.createBulk(pacientesAvanzados);
			await this.metabolitosModel.createBulk(metabolitos);
			await this.metabolitos_riesgoModel.createBulk(metabolitos_riesgo);
			await this.genetic_score_model.createBulk(genetic_score);
			return "ok";
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
