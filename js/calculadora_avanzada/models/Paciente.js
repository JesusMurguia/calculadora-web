export default class Paciente {
  constructor() {
    this.metabolitos = [];
    this.genetic_score = [];
  }
  getId() {
    return this.id;
  }
  getEdad() {
    return this.edad;
  }
  getGenero() {
    return this.genero;
  }
  getCigarrillosDia() {
    return this.cigarrillosDia;
  }
  getMetabolitos() {
    return this.metabolitos;
  }
  getVariacionGenetica() {
    return this.genetic_score;
  }
  setId(id) {
    this.id = id;
  }
  setEdad(edad) {
    this.edad = edad;
  }
  setGenero(genero) {
    this.genero = genero;
  }
  setCigarrillosDia(cigarrillosDia) {
    this.cigarrillosDia = cigarrillosDia;
  }
  setMetabolitos(metabolitos) {
    this.metabolitos = metabolitos;
  }
  setVariacionGenetica(variacionGenetica) {
    this.variacionGenetica = variacionGenetica;
  }
}
