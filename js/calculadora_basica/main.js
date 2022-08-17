import formFirstPart from './formSections/formFirstPart.js';

window.onload = function () {
    // se crea el objeto formulario
    localStorage.removeItem("token");
    const form1 = new formFirstPart(document.getElementById('formFirstPart'));
}