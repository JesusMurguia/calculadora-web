window.onload = function() {

    
    const submitButton = document.getElementById('submit');

    const flipCardInner = document.getElementById('flip-card-inner');
    
    const meter = document.getElementById('meter');

    const secondSection1 = document.getElementById('second-section-1');
    const secondSection2 = document.getElementById('second-section-2');

    const resetButton = document.getElementById('reset');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        let total = 0;
        
        total += parseInt(document.getElementById('pregunta1').value);
        total += parseInt(document.querySelector('input[name="pregunta2"]:checked').value);
        total += parseInt(document.querySelector('input[name="pregunta3"]:checked').value);
        total += parseInt(document.getElementById('pregunta4').value);
        total += parseInt(document.querySelector('input[name="pregunta5"]:checked').value);
        total += parseInt(document.querySelector('input[name="pregunta6"]:checked').value);

        setGaugeValue(total/10, total);

        flipCardInner.classList.add('flipped');

        secondSection1.classList.add('hidden');
        secondSection2.classList.remove('hidden');

        window.scrollTo(0, 0);

    });

    resetButton.addEventListener('click', function(e) {
        e.preventDefault();
        flipCardInner.classList.remove('flipped');
        secondSection1.classList.remove('hidden');
        secondSection2.classList.add('hidden');
        setGaugeValue(0, 0);
    });



    const setGaugeValue = (value, total) => {
        const gauge = document.querySelector(".gauge");
            if (value < 0 || value > 1) {
                return;
            }

            if (total >= 7) {
                document.getElementById('result-description').innerHTML = "Dependencia Alta";
                gauge.querySelector(".gauge__fill").style.transform = `rotate(${
                    value / 2
                    }turn)`;
                gauge.querySelector(".gauge__cover").textContent = `${total} puntos`;
                gauge.querySelector(".gauge__fill").style.backgroundColor = "#b20811";
            }
            else if (total >= 4) {
                document.getElementById('result-description').innerHTML = "Dependencia Media";
                gauge.querySelector(".gauge__fill").style.transform = `rotate(${
                    value / 2
                    }turn)`;
                gauge.querySelector(".gauge__cover").textContent = `${total} puntos`;
                gauge.querySelector(".gauge__fill").style.backgroundColor = "#f4db0a";
            }
            else {
                document.getElementById('result-description').innerHTML = "Dependencia Baja";
                gauge.querySelector(".gauge__fill").style.transform = `rotate(${
                    value / 2
                    }turn)`;
                gauge.querySelector(".gauge__cover").textContent = `${total} puntos`;
                gauge.querySelector(".gauge__fill").style.backgroundColor = "#5f9600";
            }
    
            
    }
}