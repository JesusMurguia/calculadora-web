const query = require("../db/db-connection");

class PacienteBasicoModel {
	constructor() {
		this.table = "paciente_basico";
		this.paciente;
	}
	find = async () => {
		const sql = `SELECT * FROM ${this.table}`;
		return await query(sql);
	};
	findById = async (id) => {
		const sql = `SELECT * FROM ${this.table} WHERE idpaciente = ?`;
		return await query(sql, [id]);
	};
	create = async (data) => {
		this.paciente = this.diagnostico(data);
		try {
			const sql = `INSERT INTO ${this.table} (idpaciente, puntos, dependencia) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE puntos = VALUES(puntos), dependencia = VALUES(dependencia)`;
			await query(sql, [this.paciente.idpaciente, this.paciente.puntos, this.paciente.dependencia]);
			return this.paciente;
		} catch (err) {
			return err;
		}
	};
	update = async (id, data) => {
		try {
			const sql = `UPDATE ${this.table} SET puntos = ?, dependencia = ? WHERE idpaciente = ?`;
			await query(sql, [...data, id]);
			return this.paciente;
		} catch (err) {
			console.log(err);
		}
	};
	delete = async (id) => {
		const sql = `DELETE FROM ${this.table} WHERE idpaciente = ?`;
		return await query(sql, [id]);
	};
	diagnostico(paciente) {
		paciente.puntos = paciente.respuestas.reduce((a, b) => a + b, 0);
		if (paciente.puntos >= 7) {
			paciente.recomendaciones =
				"Tienes un nivel de dependencia a la nicotina bastante alto. Seguramente ya te está causando muchos problemas. Es necesario que busques ayuda profesional con un especialista en adicciones. No dudes en dar este paso lo antes posible y no lo pospongas más. Tú puedes dejar de fumar, solo necesitas ayuda profesional. ¡Va a ser la mejor decisión de tu vida no lo dudes! Te recomiendo empezar a hacer más actividades al aire libre, esto te distraerá y mejorará tu salud.";
			paciente.dependencia = "Alta";
		} else if (paciente.puntos >= 4) {
			paciente.recomendaciones =
				"Tienes un nivel moderado de dependencia a la nicotina. Probablemente te cuesta fumar menos de lo habitual. No dejes que el cigarrillo tenga poder sobre ti. Te recomiendo usar productos que sustituyan la nicotina, pero claro, debes ir disminuyendo su uso paulatinamente. También te recomiendo mantenerte ocupado en actividades al aire libre, esto mejorará tu salud y te olvidarás de fumar. Si tu fuerza de voluntad no es suficiente para dejar de fumar te recomiendo que busques a un especialista en adicciones. Vale la pena, te sentirás mejor y no te arrepentirás de esta decisión.";
			paciente.dependencia = "Media";
		} else {
			paciente.recomendaciones =
				"De acuerdo con tu puntuación tienes baja dependencia a la nicotina. ¡¡Tú puedes dejar de fumar, solo hace falta decidirse!! Si tienes dudas en poder dejar de fumar, te aconsejo productos que sustituyen la nicotina, pero claro, debes ir disminuyendo su uso paulatinamente. Aprovecha que aun puedes dejarlo. Si aumentas tu consumo de cigarros puede aumentar tu adicción. ¡Así que ya es hora!";
			paciente.dependencia = "Baja";
		}
		return paciente;
	}
}

module.exports = PacienteBasicoModel;
