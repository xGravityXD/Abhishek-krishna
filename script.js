const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  toggleBtn.textContent = '🌞 Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    toggleBtn.textContent = '🌞 Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
