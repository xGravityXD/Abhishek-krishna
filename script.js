// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  toggleBtn.textContent = body.classList.contains('dark-theme') ? '🌞 Light Mode' : '🌙 Dark Mode';
});

// Hamburger menu (optional)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
