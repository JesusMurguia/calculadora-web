import FormController from "./form/form_controller.js";
import FormPopulator from "./form/form_populator.js";
window.onload = function () {
  localStorage.removeItem("token");
  init();
};

const init = async () => {
  const formController = new FormController();
  const formPopulator = new FormPopulator();
  formController.init();
  await formPopulator.init();
};
