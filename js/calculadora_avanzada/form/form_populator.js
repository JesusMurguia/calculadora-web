import fetchAPI from "../services/fetchAPI.js";
import Medidor from "../models/Medidor.js";

class FormPopulator {
  constructor() { }
  async init() {
    const data = await fetchAPI.getVariacionGenetica();


    let newform = document.getElementById("snp-form");


    data.forEach((data) => {
      newform.innerHTML += this.newElement(data);
    });

    let varianteBtn = document.querySelectorAll(".variante-btn");
    let varianteTooltip = document.querySelectorAll(".variante-tooltip");

    for (let i = 0; i < varianteBtn.length; i++) {
      // show tooltip on hover
      varianteBtn[i].addEventListener("mouseover", function () {
        varianteTooltip[i].classList.add("show");
      });
      varianteBtn[i].addEventListener("mouseout", function () {
        varianteTooltip[i].classList.remove("show");
      });
    }
  }
  static result(data) {
    // se crea el medidor y se ajusta de acuerdo a la dependencia
    const medidor1 = new Medidor(document.getElementById("gauge-1"));
    medidor1.ajustarMedidor("Bajo");
    // delay de medio segundo para que se vea la animacion perrona
    setTimeout(() => {
      medidor1.ajustarMedidor(data.resultado_genetic_score);
    }, 500);

    // se crea el medidor y se ajusta de acuerdo a la dependencia
    const medidor3 = new Medidor(document.getElementById("gauge-3"));
    medidor3.ajustarMedidor("Bajo");
    // delay de medio segundo para que se vea la animacion perrona
    setTimeout(() => {
      medidor3.ajustarMedidor(data.resultadoMetabolitos[data.resultadoMetabolitos.length - 1]);
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
          <div class="col-3  ps-0 pe-0 variante-btn">
            <div class="variante-tooltip">${data.wt}</div>
          <div class="form-check">
              <input
              class="form-check-input"
              type="radio"
              name="variacionGenetica${data.snp}"
              id="WT${data.idvariacion_genetica}"
              value="${data.wt_riesgo}"
              />
              <label
              class="form-check-label"
              for="WT${data.idvariacion_genetica}"
              data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"
              >
              WT
              </label>
          </div>
          </div><div class="col-3  ps-0 pe-0 variante-btn">
          <div class="variante-tooltip">${data.het}</div>

          <div class="form-check">
              <input
              class="form-check-input"
              type="radio"
              name="variacionGenetica${data.snp}"
              id="HET${data.idvariacion_genetica}"
              value="${data.het_riesgo}"
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
          <div class="col-3  ps-0 pe-0 variante-btn">
          <div class="variante-tooltip">${data.mut}</div>

          <div class="form-check">
              <input
              class="form-check-input"
              type="radio"
              name="variacionGenetica${data.snp}"
              id="MUT${data.idvariacion_genetica}"
              value="${data.mut_riesgo}"
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
