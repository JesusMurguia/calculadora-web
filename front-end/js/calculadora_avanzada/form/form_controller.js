import Paciente from "../models/Paciente.js";
import googleAuth from "../services/googleAuth.js";
import fetchAPI from "../services/fetchAPI.js";
import FormPopulator from "./form_populator.js";

class FormController {
  constructor() { }
  init() {
    this.multiStepForm = document.querySelector("[data-multi-step]");
    this.formSteps = [...this.multiStepForm.querySelectorAll("[data-step]")];
    this.currentStep = this.formSteps.findIndex((step) => {
      return step.classList.contains("active");
    });
    if (this.currentStep < 0) {
      this.currentStep = 0;
      this.showCurrentStep();
    }

    this.multiStepForm.addEventListener(
      "click",
      this.multiStepFormClick.bind(this)
    );

    this.formSteps.forEach((step) => {
      step.addEventListener("animationend", this.animationEnd.bind(this));
    });

    this.multiStepForm.addEventListener("submit", this.submitForm.bind(this));
  }
  showCurrentStep() {
    this.formSteps.forEach((step, index) => {
      step.classList.toggle("active", index === this.currentStep);
    });
  }
  multiStepFormClick(e) {
    let incrementor;
    if (e.target.matches("[data-next]")) {
      incrementor = 1;
    } else if (e.target.matches("[data-previous]")) {
      incrementor = -1;
    }

    if (incrementor == null) return;

    const inputs = [
      ...this.formSteps[this.currentStep].querySelectorAll("input"),
    ];
    const allValid = inputs.every((input) => input.reportValidity());
    if (allValid) {
      this.currentStep += incrementor;
      this.showCurrentStep();
    }
  }
  animationEnd(e) {
    this.formSteps[this.currentStep].classList.remove("hide");
    e.target.classList.toggle("hide", !e.target.classList.contains("active"));
  }
  submitForm(e) {
    e.preventDefault();

    let paciente = this.crearPaciente(
      new Paciente(),
      new FormData(this.multiStepForm)
    );

    if (localStorage.getItem("token")) {
      paciente.id = localStorage.getItem("token");
      localStorage.removeItem("token");
      this.next(paciente);
    }
  }
  async next(paciente) {
    const result = await fetchAPI.postPaciente(paciente);

    this.currentStep += 1;
    this.showCurrentStep();
    document.querySelector("[result-step-card]").classList.add("expandRight");
    document.querySelector("[result-step-content]").classList.add("hide");

    FormPopulator.result(result);
  }
  crearPaciente(paciente, formData) {
    for (const [key, value] of formData.entries()) {
      if (key.includes("metabolito")) {
        paciente.metabolitos.push(Number(value));
      }
      if (key.includes("variacionGenetica")) {
        paciente.genetic_score.push(Number(value));
      }
      if (key === "edad") {
        paciente.edad = Number(value);
      }
      if (key === "genero") {
        paciente.genero = value;
      }
      if (key === "edad-fumador") {
        paciente.edadFumador = Number(value);
      }
      if (key === "cigarrillos-dia") {
        paciente.cigarrillosDia = Number(value);
      }
    }
    return paciente;
  }
}

export default FormController;
