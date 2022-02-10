import formFirstPart from './formSections/formFirstPart.js';
import fetchAPI from './services/fetchAPI.js';

window.onload = function() {
    // se crea el objeto formulario
    const form1 = new formFirstPart(document.getElementById('formFirstPart'));
    fetchAPI.test().then(res => {
        console.log(res);
    });
}