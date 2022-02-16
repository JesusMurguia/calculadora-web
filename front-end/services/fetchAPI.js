export default class fetchAPI{
    constructor(){
    }

    static postPaciente(paciente){
        return fetch("http://127.0.0.1:3000/api/paciente", {
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
      return fetch("http://127.0.0.1:3000/api/paciente/skip", {
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