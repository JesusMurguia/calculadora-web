const genetic_score_dictionary_model = require("../models/genetic_score_dictionary_model");

class PacienteAvanzadoController {
  constructor() {
    this.genetic_score_dictionary_model = new genetic_score_dictionary_model();
  }
  find = async () => {
    try {
      const result = await this.genetic_score_dictionary_model.find();
      return result;
    } catch (err) {
      return err;
    }
  };
}

module.exports = PacienteAvanzadoController;
