const query = require("../db/db-connection");
const googleAuth = require("../utils/auth");

class PacienteModel {
  constructor() {
    this.table = "paciente";
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
    try {
      const idpaciente = await googleAuth.verify(data.id);
      data.id = "";
      data.idpaciente = idpaciente;
      const sql = `INSERT INTO ${this.table} (idpaciente, edad, edadFumador, genero, cigarrillosDia) VALUES (?, ?, ?, ?, ?)`;
      await query(sql, [
        data.idpaciente,
        data.edad,
        data.edadFumador,
        data.genero,
        data.cigarrillosDia,
      ]);
      return data;
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return await this.update(data.idpaciente, data);
      }
      return err;
    }
  };
  update = async (id, data) => {
    const sql = `UPDATE ${this.table} SET edad = ?, edadFumador = ?, genero = ?, cigarrillosDia = ? WHERE idpaciente = ?`;
    await query(sql, [
      data.edad,
      data.edadFumador,
      data.genero,
      data.cigarrillosDia,
      id,
    ]);
    return data;
  };
  delete = async (id) => {
    const sql = `DELETE FROM ${this.table} WHERE idpaciente = ?`;
    return await query(sql, [id]);
  };
  cigarrillosDiaDiagnostico = (cigarrillosDia) => {
    if (cigarrillosDia < 5) {
      return "Bajo";
    } else if (cigarrillosDia > 11) {
      return "Alto";
    }
    return "Medio";
  };
}

module.exports = PacienteModel;
