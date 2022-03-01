import Paciente from "../models/Paciente.js";
import formSecondPart from "./formSecondPart.js";

export default class formFirstSection{
    constructor(form){
        this.form = form;
        this.form.addEventListener('submit', this.submit.bind(this));
    }
    submit(event){
        event.preventDefault();


        //guardar valores del formulario 
        const formData = new FormData(this.form);
        let respuestas = [];
        for (const [key, value] of formData.entries()){
            respuestas.push(Number(value));
        }

        //crear objeto paciente
        let paciente = new Paciente();
        paciente.respuestas = respuestas;

        //se inicia la segunda parte del formulario
        this.next(paciente);
    }
    next(paciente){
        // se ocultan las secciones del formulario 1 y se muestra la seccion del formulario 2
        document.getElementById('second-section-1').classList.add('hidden');
        document.getElementById('second-section-2').classList.remove('hidden');
        const form2 = new formSecondPart(document.getElementById('formSecondPart'),paciente);
    }
    
}