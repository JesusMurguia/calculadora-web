import fetchAPI from "../services/fetchAPI.js";
import Medidor from "../models/Medidor.js";

class FormPopulator {
  constructor() { }
  async init() {
    const data = await fetchAPI.getVariacionGenetica();

    let newform = document.getElementById("snp-form");
    let newform2 = document.getElementById("snp-form-2");

    let data2 = data.splice(0, data.length / 2);

    data2.forEach((data) => {
      newform.innerHTML += this.newElement(data);
    });
    data.forEach((data) => {
      newform2.innerHTML += this.newElement(data);
    });
  }
  static result(data) {
    const nombresMetabolitos = [
      "3-hidroxicotinina-O-Gluc",
      "Cotinina-N-Gluc",
      "3-hidroxicotinina",
      "Cotinina",
      "Nicotina",
      "Nicotina-N-Gluc",
      "4HPBA",
      "Óxido de cotinina",
      "Óxido de Nicotina",
    ];

    //se popula la tabla de resultados
    let table = document.getElementById("table-body");
    for (let i = 0; i < data.metabolitos.length; i++) {
      if (data.metabolitos[i] !== 0) {
        table.innerHTML += `<tr>
        <td class="text-align-left">${nombresMetabolitos[i]}</td>
        <td>${data.resultadoMetabolitos[i]}</td>
        <td>${data.metabolitos[i]}</td>
        </tr>
        `;
      }
    }

    // se crea el medidor y se ajusta de acuerdo a la dependencia
    const medidor1 = new Medidor(document.getElementById("gauge-1"));
    medidor1.ajustarMedidor("Bajo");
    // delay de medio segundo para que se vea la animacion perrona
    setTimeout(() => {
      medidor1.ajustarMedidor(data.resultado_genetic_score);
    }, 500);

    // se crea el medidor y se ajusta de acuerdo a la dependencia
    const medidor2 = new Medidor(document.getElementById("gauge-2"));
    medidor2.ajustarMedidor("Bajo");
    // delay de medio segundo para que se vea la animacion perrona
    setTimeout(() => {
      medidor2.ajustarMedidor(data.resultadoCigarrillosDiarios);
    }, 500);
  }

  newElement(data) {
    return `
    <div class="mb-3">
      <div class="row input-group d-flex flex-row align-content-center align-items-center">
      <div class="col-3 p-1 d-flex justify-content-center input-group-text">${data.snp
      }</div>
          <div class="col-3  ps-0 pe-0">
          <div class="form-check">
              <input
              class="form-check-input"
              type="radio"
              name="variacionGenetica${data.snp}"
              id="WT${data.idvariacion_genetica}"
              value="${data.wt_riesgo.toFixed(2)}"
              />
              <label
              class="form-check-label"
              for="WT${data.idvariacion_genetica}"
              >
              WT
              </label>
          </div>
          </div><div class="col-3  ps-0 pe-0">
          <div class="form-check">
              <input
              class="form-check-input"
              type="radio"
              name="variacionGenetica${data.snp}"
              id="HET${data.idvariacion_genetica}"
              value="${data.het_riesgo.toFixed(2)}"
              checked
              />
              <label
              class="form-check-label"
              for="HET${data.idvariacion_genetica}"
              
              >
              HET
              </label>
          </div>
          </div>
          <div class="col-3  ps-0 pe-0">
          <div class="form-check">
              <input
              class="form-check-input"
              type="radio"
              name="variacionGenetica${data.snp}"
              id="MUT${data.idvariacion_genetica}"
              value="${data.mut_riesgo.toFixed(2)}"
              />
              <label
              class="form-check-label"
              for="MUT${data.idvariacion_genetica}"
              >
              MUT
              </label>
          </div>
          </div>
      </div>
      </div>
      `;
  }
}

export default FormPopulator;
