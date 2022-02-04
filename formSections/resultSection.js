import fetchAPI from "../services/fetchAPI.js";
import Medidor from "./Medidor.js";

export default class resultSection{
    constructor(section, paciente){
        this.section = section;
        this.paciente = paciente;
        this.section.querySelector('#reset').addEventListener('click', this.reset.bind(this));
    }
    result(){
        // se obtiene el diagnostico del paciente y se muestra en el resultado
        fetchAPI.postPaciente(this.paciente).then(paciente => {
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
        document.getElementById('second-section-3').classList.add('hidden');
        document.getElementById('second-section-1').classList.remove('hidden');
        document.getElementById('flip-card-inner').classList.remove('flipped');
    }
}