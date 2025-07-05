const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  themeToggle.textContent = body.classList.contains('light-theme')
    ? '🕶 Dark Mode'
    : '🎮 Light Mode';
});

// Slideshow animation
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000); // Change every 3 seconds
