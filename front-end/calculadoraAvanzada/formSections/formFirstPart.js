import Paciente from "../models/Paciente.js";
import formSecondPart from "./formSecondPart.js";
import fetchAPI from "../services/fetchAPI.js";

export default class formFirstSection {
  constructor(form) {
    this.form = form;
    this.form.addEventListener("submit", this.submit.bind(this));
  }
  submit(event) {
    event.preventDefault();

    //guardar valores del formulario
    const formData = new FormData(this.form);
    let metabolitos = [];
    for (const [key, value] of formData.entries()) {
      metabolitos.push(Number(value));
    }
    //crear objeto paciente
    let paciente = new Paciente();
    paciente.metabolitos = metabolitos;

    //se inicia la segunda parte del formulario
    this.next(paciente);
  }
  async next(paciente) {
    // se ocultan las secciones del formulario 1 y se muestra la seccion del formulario 2
    document.getElementById("second-section-1").classList.add("hidden");
    document.getElementById("second-section-2").classList.remove("hidden");

    const data = await fetchAPI.getVariacionGenetica();

    console.log(data);

    let newform = document.getElementById("snp-form");

    data.map((data) => {
      newform.innerHTML += `
      <div class="mb-2">
        <div class="row input-group d-flex flex-row align-content-center align-items-center">
        <div class="col-3 p-1 d-flex justify-content-center input-group-text">${
          data.snp
        }</div>
            <div class="col-3  ps-0 pe-0">
            <div class="form-check">
                <input
                class="form-check-input"
                type="radio"
                name="${data.snp}"
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
                name="${data.snp}"
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
                name="${data.snp}"
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
    });

    const form2 = new formSecondPart(
      document.getElementById("formSecondPart"),
      paciente
    );
  }
}
