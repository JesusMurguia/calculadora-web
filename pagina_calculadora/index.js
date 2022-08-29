window.onload = function () {
    let dropdownsdesktop = document.querySelectorAll('[data-dropdown-desktop]');
    dropdownsdesktop.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function (e) {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.add('open');
            this.querySelector('.dropdown-btn').classList.add('arrow-up');
        });
        dropdown.addEventListener('mouseout', function (e) {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.remove('open');
            this.querySelector('.dropdown-btn').classList.remove('arrow-up');
        });
    });
    let dropdownsmobile = document.querySelectorAll('[data-dropdown-mobile]');
    dropdownsmobile.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('open');
            this.querySelector('.dropdown-btn').classList.toggle('arrow-up');
        });
    });
    let closeMenu = document.querySelector('[data-close-menu]');
    let openMenu = document.querySelector('[data-open-menu]');
    let navMobile = document.querySelector('[data-nav-mobile]');
    let navMobileContent = document.querySelector('[data-nav-mobile-content]');
    closeMenu.addEventListener('click', function (e) {
        navMobile.classList.remove('open');
    });
    openMenu.addEventListener('click', function (e) {
        navMobileContent.classList.add('open');
        navMobile.classList.add('open');
    });
    let btns = document.querySelectorAll('.nav-link');
    btns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            navMobile.classList.remove('open');
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    /**----------------------------------------------------- */
    /**DIRECTUS */
    /**----------------------------------------------------- */

    const URL = 'https://calculadora.borrego-research.com:8080/';

    fetch(URL + 'items/Calculadora')
        .then(response => response.json())
        .then(data => {
            const { Titulo, introduccion_texto, Imagen_de_calculadora } = data.data;
            document.querySelector('.section1-title').innerHTML = Titulo;
            document.querySelector('.section1-description').innerHTML = introduccion_texto;
            document.querySelector('.section1-img').src = `${URL}assets/${Imagen_de_calculadora}`;
        });
    //proyecto investigacion
    fetch(URL + 'items/ProyectoInv')
        .then(response => response.json())
        .then(data => {
            const { descripcion_proyecto } = data.data;
            document.querySelector('.descripcionProyectoInv').innerHTML = descripcion_proyecto;
        });
    //termina proyecto investigacion
    fetch(URL + 'items/Nicotina')
        .then(response => response.json())
        .then(data => {
            const { Titulo, Descripcion, Imagen_Nicotina } = data.data;
            document.querySelector('.section2-title').innerHTML = Titulo;
            document.querySelector('.section2-description').innerHTML = Descripcion;
            document.querySelector('.section2-img').src = `${URL}assets/${Imagen_Nicotina}`;

            document.getElementById('loading').classList.add('hidden')
            document.getElementById('main').classList.remove('hidden')
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
            list.forEach((item, index) => {
                const div = document.createElement('div');
                div.classList.add(`card`);
                div.classList.add(`card-${index + 1}`);
                div.innerHTML = item.Tip
                section5grid.appendChild(div);
            });
        });
}

