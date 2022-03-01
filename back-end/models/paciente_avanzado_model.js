const query = require("../db/db-connection");

class PacienteAvanzadoModel {
  constructor() {
    this.table = "paciente_avanzado";
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
      const sql = `INSERT INTO ${this.table} (idpaciente) VALUES (?)`;
      await query(sql, [this.paciente.idpaciente]);
      return this.paciente;
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return await this.update(this.paciente.idpaciente, [
          this.paciente.idpaciente,
        ]);
      }
      return err;
    }
  };
  update = async (id, data) => {
    try {
      const sql = `UPDATE ${this.table} SET idpaciente = ? WHERE idpaciente = ?`;
      await query(sql, [id, id]);
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

module.exports = PacienteAvanzadoModel;
