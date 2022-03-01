export default class fetchAPI {
  constructor() {}

  static postPaciente(paciente) {
    return fetch("https://borregotestnet.ddns.net/api/pacienteAvanzado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
      body: JSON.stringify(paciente),
    }).then((res) => res.json());
  }
  static postPacienteSkip(paciente) {
    return fetch("https://borregotestnet.ddns.net/api/pacienteAvanzado/skip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(paciente),
    }).then((res) => res.json());
  }
  static getVariacionGenetica() {
    return fetch(
      "https://borregotestnet.ddns.net/api/genetic_score_dictionary",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((res) => res.json());
  }
}
