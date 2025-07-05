// ====== Theme Toggle ======
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  themeToggle.textContent = body.classList.contains('light-theme')
    ? '🕶 Dark Mode'
    : '🎮 Light Mode';
});

// ====== Parallax Slideshow (Hero Section) ======
let currentSlide = 0;
const slides = document.querySelectorAll('.parallax-container .slide');

function showParallaxSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextParallaxSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showParallaxSlide(currentSlide);
}

setInterval(nextParallaxSlide, 5000); // Change every 5 seconds
