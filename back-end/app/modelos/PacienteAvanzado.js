class PacienteBasico {
  constructor(
    id,
    edad,
    edadFumador,
    genero,
    cigarrillosDia,
    metabolitos,
    variacionGenetica
  ) {
    this.id = id;
    this.edad = edad;
    this.edadFumador = edadFumador;
    this.genero = genero;
    this.cigarrillosDia = cigarrillosDia;
    this.metabolitos = metabolitos;
    this.variacionGenetica = variacionGenetica;
  }
}

module.exports = Paciente;
