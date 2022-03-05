const query = require("../db/db-connection");

class GeneticScoreModel {
  constructor() {
    this.table = "variacion_genetica_diccionario";
  }
  find = async () => {
    const sql = `SELECT * FROM ${this.table}`;
    return await query(sql);
  };
}

module.exports = GeneticScoreModel;
