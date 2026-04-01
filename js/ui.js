// Gestión de Modo Oscuro
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Cargar preferencia guardada
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Feedback visual en el botón
    themeToggle.querySelector('span').textContent = newTheme === 'light' ? '☀️' : '🌙';
});

// Animación de Scroll Reveal
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));