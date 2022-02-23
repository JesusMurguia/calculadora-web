class PacienteBasico {
  constructor(
    id,
    edad,
    edadFumador,
    genero,
    cigarrillosDia,
    puntos,
    dependencia,
    recomendaciones,
    respuestas
  ) {
    this.id = id;
    this.edad = edad;
    this.edadFumador = edadFumador;
    this.genero = genero;
    this.cigarrillosDia = cigarrillosDia;
    this.puntos = puntos;
    this.dependencia = dependencia;
    this.recomendaciones = recomendaciones;
    this.respuestas = respuestas;
  }
  diagnostico() {
    this.puntos = this.respuestas.reduce((a, b) => a + b, 0);
    if (this.puntos >= 7) {
      this.recomendaciones = `Tienes un nivel de dependencia a la nicotina bastante alto. Seguramente ya te esta causando muchos
      problemas. Es necesario que busques ayuda profesional con un especialista en adicciones. No dudes en
      dar este paso lo antes posible y no lo pospongas más. Tú puedes dejar de fumar, solo ocupas apoyo y
      ayuda profesional. ¡Va a ser la mejor decisión de tu vida no lo dudes ¡
      Te recomiendo empezar a hacer más actividades al aire libre, esto te distraerá y mejorará tu salud.`;
      this.dependencia = "Alta";
    } else if (this.puntos >= 4) {
      this.recomendaciones = `Tienes un nivel moderado de dependencia a la nicotina. Probablemente te cuesta fumar menos de lo
        habitual. No dejes que el cigarrillo tenga poder sobre ti. Te recomiendo usar productos que sustituyen la
        nicotina, pero claro, debes ir disminuyendo su uso paulatinamente. También te recomiendo
        mantenerte ocupado en actividades al aire libre, esto mejorara tu salud y te olvidarás de fumar. Si tu
        fuerza de voluntad no es suficiente para dejar de fumar te recomiendo que busques a un especialista en
        adicciones. Vale la pena, te sentirás mejor y no te arrepentirás de esta decisión.
        `;
      this.dependencia = "Media";
    } else {
      this.recomendaciones = `
        De acuerdo con tu puntuación tienes baja dependencia a la nicotina. ¡¡Tú puedes dejar de fumar, solo
        hace falta decidirte!!
        Si tienes dudas en poder dejar de fumar, te aconsejo productos que sustituyen la nicotina, pero claro,
        debes ir disminuyendo su uso paulatinamente.
        Aprovecha que aun puedes dejarlo. Si aumentas tu consumo de cigarros puede aumentar tu adicción.
        ¡Así que ya es hora!
        `;
      this.dependencia = "Baja";
    }
  }
}

module.exports = PacienteBasico;
