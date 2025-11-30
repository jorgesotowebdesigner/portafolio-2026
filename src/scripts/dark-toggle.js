const toggle = document.getElementById('dark-toggle');
const dot = toggle.nextElementSibling.querySelector('span');

// Mantener preferencia guardada
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark');
  toggle.checked = true;
  dot.style.transform = 'translateX(100%)';
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  if (toggle.checked) {
    dot.style.transform = 'translateX(100%)';
    localStorage.setItem('dark-mode', 'true');
  } else {
    dot.style.transform = 'translateX(0)';
    localStorage.setItem('dark-mode', 'false');
  }
});
