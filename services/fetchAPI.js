export default class fetchAPI{
    constructor(){
    }

    static postPaciente(paciente){
        return fetch("https://borregotestnet.ddns.net/api/paciente", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Accept': 'application/json'
          },
           body: JSON.stringify(paciente)
        })
        .then(res => res.json());
    }
    static postPacienteSkip(paciente){
      return fetch("https://borregotestnet.ddns.net/api/paciente/skip", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
         body: JSON.stringify(paciente)
      })
      .then(res => res.json());
  }
  static test(){
    return fetch("https://borregotestnet.ddns.net/api/paciente/test", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
  }
}