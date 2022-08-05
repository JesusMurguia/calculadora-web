window.onload = function () {
    const URL = 'http://localhost:8055/';

    fetch(URL + 'items/Calculadora')
        .then(response => response.json())
        .then(data => {
            const { Titulo, introduccion_texto, Imagen_de_calculadora } = data.data;
            document.querySelector('.section1-title').innerHTML = Titulo;
            document.querySelector('.section1-description').innerHTML = introduccion_texto;
            document.querySelector('.section1-img').src = `${URL}assets/${Imagen_de_calculadora}`;
        });

    fetch(URL + 'items/Nicotina')
        .then(response => response.json())
        .then(data => {
            const { Titulo, Descripcion, Imagen_Nicotina } = data.data;
            document.querySelector('.section2-title').innerHTML = Titulo;
            document.querySelector('.section2-description').innerHTML = Descripcion;
            document.querySelector('.section2-img').src = `${URL}assets/${Imagen_Nicotina}`;
        });

    fetch(URL + 'items/Metabolitos')
        .then(response => response.json())
        .then(data => {
            const { Titulo, Descripcion, Imagen_Metabolitos } = data.data;
            document.querySelector('.section3-title').innerHTML = Titulo;
            document.querySelector('.section3-description').innerHTML = Descripcion;
            document.querySelector('.section3-img').src = `${URL}assets/${Imagen_Metabolitos}`;
        });

    fetch(URL + 'items/Genes')
        .then(response => response.json())
        .then(data => {
            const { Titulo, Descripcion, Imagen_Genes } = data.data;
            document.querySelector('.section4-title').innerHTML = Titulo;
            document.querySelector('.section4-description').innerHTML = Descripcion;
            document.querySelector('.section4-img').src = `${URL}assets/${Imagen_Genes}`;
        });

    fetch(URL + 'items/Razones_para_dejar_de_fumar')
        .then(response => response.json())
        .then(data => {
            const list = data.data;
            const section5grid = document.querySelector('.section5-grid');
            list.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('card');
                div.innerHTML = item.Razon
                section5grid.appendChild(div);
            });
        });

    fetch(URL + 'items/Tips_para_lidiar_con_el_deseo_de_fumar')
        .then(response => response.json())
        .then(data => {
            const list = data.data;
            const section5grid = document.querySelector('.section6-grid');
            list.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('card');
                div.innerHTML = item.Tip
                section5grid.appendChild(div);
            });
        });
}