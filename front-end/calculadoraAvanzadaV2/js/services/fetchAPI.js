export default class fetchAPI {
  constructor() {}

  static postPaciente(paciente) {
    return fetch("http://localhost:3000/api/paciente_avanzado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
      body: JSON.stringify(paciente),
    }).then((res) => res.json());
  }
  static getVariacionGenetica() {
    return fetch("http://localhost:3000/api/genetic_score_dictionary", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
  }
}
