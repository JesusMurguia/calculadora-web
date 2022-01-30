window.onload = function() {

    const submitButton = document.getElementById('submit-btn');

    const flipCardInner = document.getElementById('flip-card-inner');
    

    submitButton.addEventListener('click', function() {
        flipCardInner.classList.toggle('flipped');
    });
}