const query = require("../db/db-connection");

class MetabolitosModel {
	constructor() {
		this.table = "metabolitos_riesgo";
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
		try {
			const sql = `INSERT INTO ${this.table} (idpaciente, 3HC_O_Gluc, Cotinine_N_Gluc, 3HC, Nicotine, Nicotine_N_Gluc, 4HPBA, Cotinine_oxide, Nicotine_N_oxide) VALUES (?,?,?,?,?,?,?,?,?) ON DUPLICATE KEY UPDATE idpaciente = VALUES(idpaciente), 3HC_O_Gluc = VALUES(3HC_O_Gluc), Cotinine_N_Gluc = VALUES(Cotinine_N_Gluc), 3HC = VALUES(3HC), Nicotine = VALUES(Nicotine), Nicotine_N_Gluc = VALUES(Nicotine_N_Gluc), 4HPBA = VALUES(4HPBA), Cotinine_oxide = VALUES(Cotinine_oxide), Nicotine_N_oxide = VALUES(Nicotine_N_oxide)`;
			await query(sql, [this.paciente.idpaciente, ...this.paciente.resultadoMetabolitos]);
			return this.paciente;
		} catch (err) {
			return err;
		}
	};
	createBulk = async (data) => {
		try {
			const sql = `INSERT INTO ${this.table} (idpaciente, 3HC_O_Gluc, Cotinine_N_Gluc, 3HC, Nicotine_N_Gluc, 4HPBA, Cotinine_oxide, Nicotine_N_oxide) VALUES ? ON DUPLICATE KEY UPDATE idpaciente = VALUES(idpaciente), 3HC_O_Gluc = VALUES(3HC_O_Gluc), Cotinine_N_Gluc = VALUES(Cotinine_N_Gluc), 3HC = VALUES(3HC), Nicotine = VALUES(Nicotine), Nicotine_N_Gluc = VALUES(Nicotine_N_Gluc), 4HPBA = VALUES(4HPBA), Cotinine_oxide = VALUES(Cotinine_oxide), Nicotine_N_oxide = VALUES(Nicotine_N_oxide)`;
			await query(sql, [data]);
			return data;
		} catch (err) {
			return err;
		}
	};
	update = async (id, data) => {
		try {
			const sql = `UPDATE ${this.table} SET 3HC_O_Gluc = ?, Cotinine_N_Gluc = ?, 3HC = ?, Nicotine = ?, Nicotine_N_Gluc = ?, 4HPBA = ?, Cotinine_oxide = ?, Nicotine_N_oxide = ? WHERE idpaciente = ?`;
			await query(sql, [...data, id]);
			return this.paciente;
		} catch (err) {
			return err;
		}
	};
	delete = async (id) => {
		const sql = `DELETE FROM ${this.table} WHERE idpaciente = ?`;
		return await query(sql, [id]);
	};
}

module.exports = MetabolitosModel;
