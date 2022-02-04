export default class fetchAPI{
    constructor(){
    }

    static postPaciente(paciente){
        return fetch("http://localhost:3000/paciente", {
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