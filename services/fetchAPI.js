export default class fetchAPI{
    constructor(){
    }

    static postPaciente(paciente){
        return fetch("http://198.101.238.125:8055/api/paciente", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
           body: JSON.stringify(paciente)
        })
        .then(res => res.json());
    }
    static postPacienteSkip(paciente){
      return fetch("http://198.101.238.125:8055/api/paciente/skip", {
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