const toggleBtn = document.getElementById('toggleBtn');
const html = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme'); // light or dark
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
});

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
