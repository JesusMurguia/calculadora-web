export default class Medidor {
  constructor(medidor) {
    this.barraMedidor = medidor.querySelector(".gauge__fill");
    this.textoMedidor = medidor.querySelector(".gauge__cover");
  }
  setColor(color) {
    this.barraMedidor.style.backgroundColor = color;
  }
  ajustarMedidor(texto) {
    const puntos = this.medidorNivelRiesgo(texto);
    this.barraMedidor.style.transform = `rotate(${puntos / 10 / 2}turn)`;
    this.textoMedidor.textContent = `${texto}`;
    if (puntos >= 7) {
      this.setColor("#b20811");
    } else if (puntos >= 4) {
      this.setColor("#f4db0a");
    } else {
      this.setColor("#5f9600");
    }
  }
  medidorNivelRiesgo(data) {
    switch (data) {
      case "Alto":
        return "10";
      case "Medio":
        return "5";
      case "Bajo":
        return "1";
    }
  }
}
