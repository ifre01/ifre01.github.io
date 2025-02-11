let currentIndex = 0;
let startX = 0;
let endX = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    endX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX > endX + 50) {
        showSlide(currentIndex + 1);
    } else if (startX < endX - 50) {
        showSlide(currentIndex - 1);
    }
}

document.querySelector('.slides').addEventListener('touchstart', handleTouchStart);
document.querySelector('.slides').addEventListener('touchmove', handleTouchMove);
document.querySelector('.slides').addEventListener('touchend', handleTouchEnd);