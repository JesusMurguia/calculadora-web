import fetchAPI from "../services/fetchAPI.js";
import Medidor from "./Medidor.js";
import googleAuth from "./googleAuth.js";
export default class resultSection{
    constructor(section, paciente){
        this.section = section;
        this.auth = new googleAuth(this);
        this.paciente = paciente;
        this.section.querySelector('#reset').addEventListener('click', this.reset.bind(this));
    }
    googleAuth(){
        this.auth.appStart();
    }
    result(user){
        // se obtiene el diagnostico del paciente y se muestra en el resultado
        fetchAPI.postPaciente(user).then(paciente => {
            console.log(paciente);
            this.paciente = paciente;
            this.paciente.nombresMetabolitos = ["3HC-O-Gluc","Cotinine-N-Gluc","3HC","Cotinine","Nicotine","Nicotine-N-Gluc","4HPBA","Cotinine-oxide","Nicotine-N-oxide"];


            // delay de medio segundo para que se vea la animacion perrona
            setTimeout(() => {
                
                document.getElementById('first-section').classList.add('expand');
                document.getElementById('last-section').classList.add('hidden');

                //se popula la tabla de resultados
                let table=document.getElementById('table-body');
                for(let i=0;i<this.paciente.metabolitos.length;i++){
                    table.innerHTML+=`<tr>
                    <td class="text-align-left">${this.paciente.nombresMetabolitos[i]}</td>
                    <td>${this.paciente.resultadoMetabolitos[i]}</td>
                    <td>${this.paciente.metabolitos[i]}</td>
                    </tr>
                    `;
                }
            }, 500);
            

            // se muestra el resultado
            document.getElementById('flip-card-inner').classList.add('flipped');
            
            
        });

    }
    resultSkip(){
        // se obtiene el diagnostico del paciente y se muestra en el resultado
        fetchAPI.postPacienteSkip(this.paciente).then(paciente => {
            document.getElementById('result-description').innerHTML = `Dependencia ${paciente.dependencia}`;
            document.getElementById('recomendacion-titulo').innerHTML = `Recomendaciones para personas con dependencia ${paciente.dependencia}:`;
            document.getElementById('recomendacion-texto').innerHTML = paciente.recomendaciones;

            // se crea el medidor y se ajusta de acuerdo a la dependencia
            const medidor = new Medidor(document.getElementById('gauge'));
            medidor.ajustarMedidor(0);
            // delay de medio segundo para que se vea la animacion perrona
            setTimeout(() => {
                medidor.ajustarMedidor(paciente.puntos);
            }, 500);

            // se muestra el resultado
            document.getElementById('flip-card-inner').classList.add('flipped');
        });
    }
    reset(){
        window.location.reload();
    }
    riskColor(risk){
        switch(risk){
            case "Bajo":
                return "#5f9600";
            case "Medio":
                return "#f4db0a";
            case "Alto":
                return "#b20811";
            default:
                return "white";
        }
    }
}