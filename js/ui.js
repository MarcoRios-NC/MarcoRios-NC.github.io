// --- Gestión de Modo Oscuro ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Actualizar icono si el botón existe en esta página
    if (themeToggle) {
        const iconContainer = themeToggle.querySelector('.theme-icon-container') || themeToggle;
        iconContainer.innerHTML = theme === 'light' 
            ? '<i class="fa-solid fa-sun"></i>' 
            : '<i class="fa-solid fa-moon"></i>';
    }
};

// Cargar preferencia inicial
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
}

// --- Animación de Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// --- Menú Móvil ---
const mobileBtn = document.getElementById('mobile-menu-btn');
const menuRight = document.getElementById('menu-right');

if (mobileBtn && menuRight) {
    mobileBtn.addEventListener('click', () => {
        menuRight.classList.toggle('active');
        mobileBtn.innerHTML = menuRight.classList.contains('active') 
            ? '<i class="fa-solid fa-xmark"></i>' 
            : '<i class="fa-solid fa-bars"></i>';
    });
}