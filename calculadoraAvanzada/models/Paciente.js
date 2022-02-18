export default class Paciente{
    constructor(id,edad, genero, cigarrillosDia, puntos, dependencia, recomendaciones, respuestas){
        this.id = id;
        this.edad = edad;
        this.genero = genero;
        this.cigarrillosDia = cigarrillosDia;
        this.puntos = puntos;
        this.dependencia = dependencia;
        this.recomendaciones = recomendaciones;
        this.respuestas=respuestas;
    }
}