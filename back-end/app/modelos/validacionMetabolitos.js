//se usa un arreglo de funciones que reciben un valor y devuelve el nivel de riesgo de cada metabolito en orden
const validaciones = [
  (valor) => {
      //3HC-0-Gluc
    if(valor < 1.1) {
      return "Bajo";
    }
    if(valor >= 1.1 && valor <= 3.48) {
      return "Medio";
    }
    if(valor > 3.48) {
      return "Alto";
    }
  },
  (valor) => {
      //Cotinine-N-Gluc
    if(valor < 1.3) {
      return "Bajo";
    }
    //Aqui es o 1.2 o 1.3 error en el documento
    if(valor >= 1.3 && valor <= 2.59) {
      return "Medio";
    }
    if(valor > 2.59) {
      return "Alto";
    }
  },
  (valor) => {
      //3HC
    if(valor < 0.8) {
      return "Bajo";
    }
    if(valor >= 0.8 && valor <= 1.67) {
      return "Medio";
    }
    if(valor > 1.67) {
      return "Alto";
    }
  },
  (valor) => {
      //Cotinine
    if(valor < 0.7) {
      return "Bajo";
    }
    if(valor >= 0.7 && valor <= 1.23) {
      return "Medio";
    }
    if(valor > 1.23) {
      return "Alto";
    }
  },
  (valor) => {
      //Nicotine
    if(valor < 0.8) {
      return "Bajo";
    }
    if(valor >= 0.8 && valor <= .52) {
      return "Medio";
    } 
    if(valor > .52) {
      return "Alto";
    }
  },
  (valor) => {
      //Nicotine-N-Gluc
    if(valor < 0.22) {
      return "Bajo";
    }
    if(valor >= 0.22 && valor <= 0.43) {
      return "Medio";
    }
    if(valor > 0.43) {
      return "Alto";
    }
  },
  (valor) => {
      // 4HPBA
    if(valor < 0.16) {
      return "Bajo";
    }
    if(valor >= 0.16 && valor <= 0.41) {
      return "Medio";
    }
    if(valor > 0.41) {
      return "Alto";
    }
  },
  (valor) => {
      //Cotinine-oxide
    if(valor < 0.2) {
      return "Bajo";
    }
    if(valor >= 0.2 && valor <= 0.43) {
      return "Medio";
    }
    if(valor > 0.43) {
      return "Alto";
    }
  },
  (valor) => {
      //Nicotine-N-oxide
    if(valor < 0.12) {
      return "Bajo";
    }
    if(valor >= 0.12 && valor <= 0.45) {
      return "Medio";
    }
    if(valor > 0.45) {
      return "Alto";
    }
  },
];


const validacionMetabolitos = (metabolitos) => {
    let resultado = [];
    for(let i = 0; i < metabolitos.length; i++) {
        resultado.push(validaciones[i](metabolitos[i]));
    }
    return resultado;
}

module.exports = validacionMetabolitos;