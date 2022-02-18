export default class Medidor{
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