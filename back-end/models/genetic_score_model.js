const query = require("../db/db-connection");

class GeneticScoreModel {
	constructor() {
		this.table = "variacion_genetica";
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
		this.paciente = data;
		this.paciente.genetic_score_total = this.paciente.genetic_score.reduce((a, b) => a * b, 1);
		this.paciente.resultado_genetic_score = this.validacionVariacionGenetica(this.paciente.genetic_score_total);
		try {
			const sql = `INSERT INTO ${this.table} (idpaciente, rs2431413, rs140122859, rs503464, rs637137, rs578776, rs167771, rs1800822, total, riesgo) VALUES(?,?,?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE rs2431413 = VALUES(rs2431413), rs140122859 = VALUES(rs140122859), rs503464 = VALUES(rs503464), rs637137 = VALUES(rs637137), rs578776 = VALUES(rs578776), rs167771 = VALUES(rs167771), rs1800822 = VALUES(rs1800822), total = VALUES(total), riesgo = VALUES(riesgo)`;
			await query(sql, [
				this.paciente.idpaciente,
				...this.paciente.genetic_score,
				this.paciente.genetic_score_total,
				this.paciente.resultado_genetic_score,
			]);
			return this.paciente;
		} catch (err) {
			return err;
		}
	};
	createBulk = async (data) => {
		try {
			const sql = `INSERT INTO ${this.table} (idpaciente, rs2431413, rs140122859, rs503464, rs637137, rs578776, rs167771, rs1800822, total, riesgo) VALUES ? ON DUPLICATE KEY UPDATE rs2431413 = VALUES(rs2431413), rs140122859 = VALUES(rs140122859), rs503464 = VALUES(rs503464), rs637137 = VALUES(rs637137), rs578776 = VALUES(rs578776), rs167771 = VALUES(rs167771), rs1800822 = VALUES(rs1800822), total = VALUES(total), riesgo = VALUES(riesgo)`;
			await query(sql, [data]);
			return data;
		} catch (err) {
			return err;
		}
	};
	update = async (id, data) => {
		try {
			const sql = `UPDATE ${this.table} SET rs2431413 = ?, rs140122859 = ?, rs503464 = ?, rs637137 = ?, rs578776 = ?, rs167771 = ?, rs1800822 = ?, total = ?, riesgo = ? WHERE idpaciente = ?`;
			await query(sql, [...this.paciente.genetic_score, this.paciente.genetic_score_total, id]);
			return this.paciente;
		} catch (err) {
			return err;
		}
	};
	delete = async (id) => {
		const sql = `DELETE FROM ${this.table} WHERE idpaciente = ?`;
		return await query(sql, [id]);
	};
	validacionVariacionGenetica = (total) => {
		if (total < 19.56) {
			return "Bajo";
		}
		if (total >= 19.56 && total <= 105.6) {
			return "Medio";
		}
		if (total > 105.6) {
			return "Alto";
		}
	};
}

module.exports = GeneticScoreModel;
