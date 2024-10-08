let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateButtons() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

    if (prevBtn.disabled) {
        prevBtn.style.backgroundColor = 'red';
    } else {
        prevBtn.style.backgroundColor = '#4e54c8';
    }

    if (nextBtn.disabled) {
        nextBtn.style.backgroundColor = 'red';
    } else {
        nextBtn.style.backgroundColor = '#4e54c8';
    }
}

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide += direction;
    slides[currentSlide].classList.add('active');
    updateButtons();
}

document.addEventListener('DOMContentLoaded', () => {
    updateButtons(); // Initial button state update
});
