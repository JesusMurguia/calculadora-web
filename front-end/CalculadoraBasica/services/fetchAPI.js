export default class fetchAPI{
    constructor(){
    }

    static postPaciente(paciente){
        return fetch("https://borregotestnet.ddns.net/api/pacienteBasico", {
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
      return fetch("https://borregotestnet.ddns.net/api/pacienteBasico/skip", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
         body: JSON.stringify(paciente)
      })
      .then(res => res.json());
  }
}