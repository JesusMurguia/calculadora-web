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
			const sql = `INSERT INTO ${this.table} (idpaciente, rs1800822, rs28363545, rs167771, rs2282511, rs3743078, rs578776, rs71581744, rs637137, rs503464, rs62380556, rs12459249, Chr5_63290337, rs17721739, rs985919, total, riesgo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)  ON DUPLICATE KEY UPDATE idpaciente = VALUES(idpaciente), rs1800822 = VALUES(rs1800822), rs28363545 = VALUES(rs28363545), rs167771 = VALUES(rs167771), rs2282511 = VALUES(rs2282511), rs3743078 = VALUES(rs3743078), rs578776 = VALUES(rs578776), rs71581744 = VALUES(rs71581744), rs637137 = VALUES(rs637137), rs503464 = VALUES(rs503464), rs62380556 = VALUES(rs62380556), rs12459249 = VALUES(rs12459249), Chr5_63290337 = VALUES(Chr5_63290337), rs17721739 = VALUES(rs17721739), rs985919 = VALUES(rs985919), total = VALUES(total), riesgo = VALUES(riesgo)`;
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
			const sql = `INSERT INTO ${this.table} (idpaciente, rs1800822, rs28363545, rs167771, rs2282511, rs3743078, rs578776, rs71581744, rs637137, rs503464, rs62380556, rs12459249, Chr5_63290337, rs17721739, rs985919, total, riesgo) VALUES ? ON DUPLICATE KEY UPDATE idpaciente = VALUES(idpaciente), rs1800822 = VALUES(rs1800822), rs28363545 = VALUES(rs28363545), rs167771 = VALUES(rs167771), rs2282511 = VALUES(rs2282511), rs3743078 = VALUES(rs3743078), rs578776 = VALUES(rs578776), rs71581744 = VALUES(rs71581744), rs637137 = VALUES(rs637137), rs503464 = VALUES(rs503464), rs62380556 = VALUES(rs62380556), rs12459249 = VALUES(rs12459249), Chr5_63290337 = VALUES(Chr5_63290337), rs17721739 = VALUES(rs17721739), rs985919 = VALUES(rs985919), total = VALUES(total), riesgo = VALUES(riesgo)`;
			await query(sql, [data]);
			return data;
		} catch (err) {
			return err;
		}
	};
	update = async (id, data) => {
		try {
			const sql = `UPDATE ${this.table} SET rs1800822 = ?, rs28363545 = ?, rs167771 = ?, rs2282511 = ?, rs3743078 = ?, rs578776 = ?, rs71581744 = ?, rs637137 = ?, rs503464 = ?, rs62380556 = ?, rs12459249 = ?, Chr5_63290337 = ?, rs17721739 = ?, rs985919 = ?, total = ?, riesgo = ? WHERE idpaciente = ?`;
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
		if (total < 0.01617) {
			return "Bajo";
		}
		if (total >= 0.01617 && total <= 0.1007) {
			return "Medio";
		}
		if (total > 0.1007) {
			return "Alto";
		}
	};
}

module.exports = GeneticScoreModel;
