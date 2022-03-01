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
    this.paciente.resultadoMetabolitos = this.diagnostico(
      this.paciente.metabolitos
    );
    try {
      const sql = `INSERT INTO ${this.table} (idpaciente, 3HC_0_Gluc, Cotinine_N_Gluc, 3HC,Cotinine, Nicotine, Nicotine_N_Gluc, 4HPBA, Cotinine_oxide, Nicotine_N_oxide) VALUES (?,?,?,?,?,?,?,?,?,?) `;
      await query(sql, [
        this.paciente.idpaciente,
        ...this.paciente.metabolitos,
      ]);
      return this.paciente;
    } catch (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return await this.update(this.paciente.idpaciente, [
          ...this.paciente.metabolitos,
        ]);
      }
      return err;
    }
  };
  update = async (id, data) => {
    try {
      const sql = `UPDATE ${this.table} SET 3HC_0_Gluc = ?, Cotinine_N_Gluc = ?, 3HC = ?,Cotinine = ?, Nicotine = ?, Nicotine_N_Gluc = ?, 4HPBA = ?, Cotinine_oxide = ?, Nicotine_N_oxide = ? WHERE idpaciente = ?`;
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
        //3HC_0_Gluc
        if (valor < 1.1) {
          return "Bajo";
        }
        if (valor >= 1.1 && valor <= 3.48) {
          return "Medio";
        }
        if (valor > 3.48) {
          return "Alto";
        }
      },
      (valor) => {
        //Cotinine_N_Gluc
        if (valor < 1.3) {
          return "Bajo";
        }
        //Aqui es o 1.2 o 1.3 error en el documento
        if (valor >= 1.3 && valor <= 2.59) {
          return "Medio";
        }
        if (valor > 2.59) {
          return "Alto";
        }
      },
      (valor) => {
        //3HC
        if (valor < 0.8) {
          return "Bajo";
        }
        if (valor >= 0.8 && valor <= 1.67) {
          return "Medio";
        }
        if (valor > 1.67) {
          return "Alto";
        }
      },
      (valor) => {
        //Cotinine
        if (valor < 0.7) {
          return "Bajo";
        }
        if (valor >= 0.7 && valor <= 1.23) {
          return "Medio";
        }
        if (valor > 1.23) {
          return "Alto";
        }
      },
      (valor) => {
        //Nicotine
        if (valor < 0.52) {
          return "Bajo";
        }
        if (valor >= 0.52 && valor <= 0.8) {
          return "Medio";
        }
        if (valor > 0.8) {
          return "Alto";
        }
      },
      (valor) => {
        //Nicotine_N_Gluc
        if (valor < 0.22) {
          return "Bajo";
        }
        if (valor >= 0.22 && valor <= 0.43) {
          return "Medio";
        }
        if (valor > 0.43) {
          return "Alto";
        }
      },
      (valor) => {
        // 4HPBA
        if (valor < 0.16) {
          return "Bajo";
        }
        if (valor >= 0.16 && valor <= 0.41) {
          return "Medio";
        }
        if (valor > 0.41) {
          return "Alto";
        }
      },
      (valor) => {
        //Cotinine_oxide
        if (valor < 0.2) {
          return "Bajo";
        }
        if (valor >= 0.2 && valor <= 0.43) {
          return "Medio";
        }
        if (valor > 0.43) {
          return "Alto";
        }
      },
      (valor) => {
        //Nicotine_N_oxide
        if (valor < 0.12) {
          return "Bajo";
        }
        if (valor >= 0.12 && valor <= 0.45) {
          return "Medio";
        }
        if (valor > 0.45) {
          return "Alto";
        }
      },
    ];
    let resultado = [];
    for (let i = 0; i < metabolitos.length; i++) {
      resultado.push(validaciones[i](metabolitos[i]));
    }
    return resultado;
  };
}

module.exports = MetabolitosModel;
