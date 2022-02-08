import resultSection from "./resultSection.js";

export default class formFirstSection{
    constructor(form, paciente){
        this.form = form;
        this.paciente = paciente;
        this.form.addEventListener('submit', this.submit.bind(this));
        document.getElementById('skip').addEventListener('click', this.skip.bind(this));
    }
    submit(event){
        event.preventDefault();

        //guardar valores del formulario 
        const formData = new FormData(this.form);
        this.paciente.edad = Number(formData.get('edad'));
        this.paciente.edadFumador = Number(formData.get('edad-fumador'));
        this.paciente.genero = formData.get('genero');
        this.paciente.cigarrillosDia = formData.get('cigarrillos-dia');

        //se limpia el formulario
        this.reset();

        //se inicia la tercera parte del formulario
        this.next(this.paciente);
    }
    next(paciente){
        // se ocultan las secciones del formulario y se muestra la seccion de resultados
        document.getElementById('second-section-2').classList.add('hidden');
        document.getElementById('second-section-3').classList.remove('hidden');

        // se sube la pantalla hasta el resultado para movil
        window.scrollTo(0, 0);

        // se crea el objeto resultado
        const resultsection = new resultSection(document.getElementById('second-section-3'),paciente);
        resultsection.result();
    }
    reset(){
        this.form.reset();
    }
    skip(){
        // se ocultan las secciones del formulario y se muestra la seccion de resultados
        document.getElementById('second-section-2').classList.add('hidden');
        document.getElementById('second-section-3').classList.remove('hidden');

        // se sube la pantalla hasta el resultado para movil
        window.scrollTo(0, 0);

        // se crea el objeto resultado
        const resultsection = new resultSection(document.getElementById('second-section-3'),this.paciente);
        resultsection.resultSkip();
    }
}