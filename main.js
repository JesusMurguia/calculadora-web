class Formulario{
    constructor(flipCardInner, secondSection1, secondSection2, secondSection3, resetButton, medidor){
        this.flipCardInner = flipCardInner;
        this.secondSection1 = secondSection1;
        this.secondSection2 = secondSection2;
        this.secondSection3 = secondSection3;
        this.resetButton = resetButton;
        this.medidor = medidor;
    }
    next(){
        this.secondSection1.classList.add('hidden');
        this.secondSection2.classList.remove('hidden');
    }
    submit(paciente){
            this.medidor.ajustarMedidor(0);
            this.flipCardInner.classList.add('flipped');
            this.secondSection2.classList.add('hidden');
            this.secondSection3.classList.remove('hidden');
            setTimeout(() => {
                this.medidor.ajustarMedidor(paciente.puntos);
            }, 500);
            document.getElementById('result-description').innerHTML = `Dependencia ${paciente.dependencia}`;
            document.getElementById('recomendacion-titulo').innerHTML = `Recomendaciones para personas con dependencia ${paciente.dependencia}:`;
            document.getElementById('recomendacion-texto').innerHTML = paciente.recomendaciones;
            window.scrollTo(0, 0);
    }
    reset(){
        this.flipCardInner.classList.remove('flipped');
        this.secondSection1.classList.remove('hidden');
        this.secondSection2.classList.add('hidden');
        this.secondSection3.classList.add('hidden');
        this.medidor.ajustarMedidor(0);
        this.secondSection2.querySelector('form').reset();
        window.scrollTo(0, 0);
    }
}

class Medidor{
    constructor(medidor){
        this.barraMedidor = medidor.querySelector(".gauge__fill");
        this.textoMedidor = medidor.querySelector(".gauge__cover");
    }
    setColor(color){
        this.barraMedidor.style.backgroundColor = color;
    }
    ajustarMedidor(puntos){
        this.barraMedidor.style.transform = `rotate(${(puntos/10) / 2}turn)`;
        this.textoMedidor.textContent = `${puntos} puntos`;
        if(puntos >= 7){
            this.setColor("#b20811");
        }else if(puntos >= 4){
            this.setColor("#f4db0a");
        }else{
            this.setColor("#5f9600");
        }
    }
}

class Paciente{
    constructor(edad, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas){
        this.edad = edad;
        this.genero = genero;
        this.cigarrillosDia = cigarrillosDia;
        this.puntos = puntos;
        this.dependencia = dependencia;
        this.recomendaciones = recomendaciones;
        this.respuestas=respuestas;
    }
}


function handleSubmit() {

     const flipCardInner = document.getElementById('flip-card-inner');
     const secondSection1 = document.getElementById('second-section-1');
     const secondSection2 = document.getElementById('second-section-2');
     const secondSection3 = document.getElementById('second-section-3');
     const resetButton = document.getElementById('reset');
     const medidor = document.getElementById('gauge');
     const formulario = new Formulario(flipCardInner, secondSection1, secondSection2, secondSection3, resetButton, new Medidor(medidor));
     let edad = secondSection2.querySelector('#edad');
     let edadFumador = secondSection2.querySelector('#edad-fumador');
     let genero = secondSection2.querySelector('#genero');
     let cigarrillosDia = secondSection2.querySelector('#cigarrillos-dia');


     edadFumador.classList.remove('error');
     edad.classList.remove('error');

    
    if(!edadFumador.value){
        edadFumador.classList.add('error');
    }
    if(!edad.value){
        edad.classList.add('error');
    }
    else if(edad.value && edadFumador.value){

    const respuestas = [
        parseInt(document.getElementById('pregunta1').value),
        parseInt(document.querySelector('input[name="pregunta2"]:checked').value),
        parseInt(document.querySelector('input[name="pregunta3"]:checked').value),
        parseInt(document.getElementById('pregunta4').value),
        parseInt(document.querySelector('input[name="pregunta5"]:checked').value),
        parseInt(document.querySelector('input[name="pregunta6"]:checked').value)
    ];

     let paciente = new Paciente();
     paciente.respuestas = respuestas;
     paciente.edad = edad.value;
     paciente.edadFumador = edadFumador.value;
     paciente.genero = genero.value;
     paciente.cigarrillosDia = cigarrillosDia.value;

     


     fetch("http://localhost:3000/paciente", {
        method: "POST",
        body: JSON.stringify(paciente),
        headers: {
            "Content-Type": "application/json"
        }}).then(response => response.json())
        .then(paciente => {
            console.log(paciente);
            formulario.submit(paciente);
        });
    }
}

function handleReset() {

    const flipCardInner = document.getElementById('flip-card-inner');
    const secondSection1 = document.getElementById('second-section-1');
    const secondSection2 = document.getElementById('second-section-2');
    const secondSection3 = document.getElementById('second-section-3');
    const resetButton = document.getElementById('reset');
    const medidor = document.getElementById('gauge');

    const formulario = new Formulario(flipCardInner, secondSection1, secondSection2, secondSection3,resetButton, new Medidor(medidor));
    formulario.reset();
}

function handleSiguiente(){
    const flipCardInner = document.getElementById('flip-card-inner');
    const secondSection1 = document.getElementById('second-section-1');
    const secondSection2 = document.getElementById('second-section-2');
    const secondSection3 = document.getElementById('second-section-3');
    const resetButton = document.getElementById('reset');
    const medidor = document.getElementById('gauge');

    const formulario = new Formulario(flipCardInner, secondSection1, secondSection2, secondSection3,resetButton, new Medidor(medidor));
    formulario.next();
}