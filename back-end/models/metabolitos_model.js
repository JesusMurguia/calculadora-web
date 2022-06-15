const query = require("../db/db-connection");

class MetabolitosModel {
	constructor() {
		this.table = "metabolitos";
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
		this.paciente.resultadoMetabolitos = this.diagnostico(this.paciente.metabolitos);
		try {
			const sql = `INSERT INTO ${this.table} (idpaciente, 3HC_O_Gluc, 3HC, Nicotine_N_Gluc, 4HPBA, Cotinine_oxide, Nicotine_N_oxide) VALUES (?,?,?,?,?,?,?)  ON DUPLICATE KEY UPDATE idpaciente = VALUES(idpaciente), 3HC_O_Gluc = VALUES(3HC_O_Gluc), 3HC = VALUES(3HC), Nicotine_N_Gluc = VALUES(Nicotine_N_Gluc), 4HPBA = VALUES(4HPBA), Cotinine_oxide = VALUES(Cotinine_oxide), Nicotine_N_oxide = VALUES(Nicotine_N_oxide)`;
			await query(sql, [this.paciente.idpaciente, ...this.paciente.metabolitos]);
			return this.paciente;
		} catch (err) {
			return err;
		}
	};
	createBulk = async (data) => {
		try {
			const sql = `INSERT INTO ${this.table} (idpaciente, 3HC_O_Gluc, 3HC, Nicotine_N_Gluc, 4HPBA, Cotinine_oxide, Nicotine_N_oxide) VALUES ? ON DUPLICATE KEY UPDATE idpaciente = VALUES(idpaciente), 3HC_O_Gluc = VALUES(3HC_O_Gluc), 3HC = VALUES(3HC), Nicotine_N_Gluc = VALUES(Nicotine_N_Gluc), 4HPBA = VALUES(4HPBA), Cotinine_oxide = VALUES(Cotinine_oxide), Nicotine_N_oxide = VALUES(Nicotine_N_oxide)`;
			await query(sql, [data]);
			return data;
		} catch (err) {
			return err;
		}
	};
	update = async (id, data) => {
		try {
			const sql = `UPDATE ${this.table} SET 3HC_O_Gluc = ?, 3HC = ?, Nicotine_N_Gluc = ?, 4HPBA = ?, Cotinine_oxide = ?, Nicotine_N_oxide = ?  WHERE idpaciente = ?`;
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
	diagnostico = (metabolitos) => {
		//se usa un arreglo de funciones que reciben un valor y devuelve el nivel de riesgo de cada metabolito en orden
		const validaciones = [
			(valor) => {
				//3HC_O_Gluc
				if (valor < 1.020) {
					return "Bajo";
				}
				if (valor >= 1.020 && valor <= 2.687) {
					return "Medio";
				}
				if (valor > 2.687) {
					return "Alto";
				}
			},
			(valor) => {
				//Cotinine_N_Gluc
				if (valor < 1.179) {
					return "Bajo";
				}
				if (valor >= 1.179 && valor <= 1.984) {
					return "Medio";
				}
				if (valor > 1.984) {
					return "Alto";
				}
			},
			(valor) => {
				//3HC
				if (valor < 0.7677) {
					return "Bajo";
				}
				if (valor >= 0.7677 && valor <= 1.393) {
					return "Medio";
				}
				if (valor > 1.393) {
					return "Alto";
				}
			},
			(valor) => {
				//Nicotine
				if (valor < 0.05082) {
					return "Bajo";
				}
				if (valor >= 0.05082 && valor <= 0.1812) {
					return "Medio";
				}
				if (valor > 0.1812) {
					return "Alto";
				}
			},
			(valor) => {
				//Nicotine_N_Gluc
				if (valor < 0.20) {
					return "Bajo";
				}
				if (valor >= 0.20 && valor <= 0.296) {
					return "Medio";
				}
				if (valor > 0.296) {
					return "Alto";
				}
			},
			(valor) => {
				// 4HPBA
				if (valor < 0.158) {
					return "Bajo";
				}
				if (valor >= 0.158 && valor <= 0.370) {
					return "Medio";
				}
				if (valor > 0.370) {
					return "Alto";
				}
			},
			(valor) => {
				//Cotinine_oxide
				if (valor < 0.191) {
					return "Bajo";
				}
				if (valor >= 0.191 && valor <= 0.386) {
					return "Medio";
				}
				if (valor > 0.386) {
					return "Alto";
				}
			},
			(valor) => {
				//Nicotine_N_oxide
				if (valor < 0.126) {
					return "Bajo";
				}
				if (valor >= 0.126 && valor <= 0.309) {
					return "Medio";
				}
				if (valor > 0.309) {
					return "Alto";
				}
			},
		];
		let resultado = [];
		for (let i = 0; i < metabolitos.length; i++) {
			resultado.push(validaciones[i](metabolitos[i]));
		}
		let arr = resultado.map(value => {
			switch (value) {
				case "Bajo":
					return 1;
				case "Medio":
					return 2;
				case "Alto":
					return 3;
			}
		})
		let suma = arr.reduce((a, b) => a + b, 0);
		let riesgo = "";
		if (suma <= 10.5) {
			riesgo = "Bajo";
		}
		if (suma > 10.5 && suma <= 16) {
			riesgo = "Medio";
		}
		if (suma > 16) {
			riesgo = "Alto";
		}
		resultado.push(riesgo);
		return resultado;
	};
}

module.exports = MetabolitosModel;
