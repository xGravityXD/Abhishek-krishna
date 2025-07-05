// === Dark/Light Theme Toggle ===
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  themeToggle.textContent = body.classList.contains('light-theme')
    ? '🕶 Dark Mode'
    : '🎮 Light Mode';
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  themeToggle.textContent = body.classList.contains('light-theme')
    ? '🕶 Dark Mode'
    : '🎮 Light Mode';
});

// Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // every 4 seconds

