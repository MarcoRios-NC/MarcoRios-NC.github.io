// Base de datos de proyectos (Fácil de administrar)
const proyectos = [
    {
        id: 1,
        titulo: "Cocina en L",
        categoria: "cocinas",
        imagen: "https://easycdn.es/4/i/cocina-en-l-de-nobilia_23034.jpg",
        descripcion: "Utiliza dos paredes unidas, aprovechando esquinas, lo que la hace muy funcional y cómoda para trabajar."
    },
    {
        id: 2,
        titulo: "Vestidor de Cedro Ahumado",
        categoria: "dormitorios",
        imagen: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800",
        descripcion: "Optimización de espacio y lujo."
    },
    {
        id: 3,
        titulo: "Centro de Entretenimiento",
        categoria: "muebles",
        imagen: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800",
        descripcion: "Líneas puras en nogal."
    },
    {
        id: 4,
        titulo: "Cocina Lineal",
        categoria: "cocinas",
        imagen: "https://kuechenart.es/wp-content/uploads/cocinas-lineales.jpg",
        descripcion: "Ideal para espacios pequeños o estrechos."
    },
    {
        id: 5,
        titulo: "Cama Flotante Minimalista",
        categoria: "dormitorios",
        imagen: "https://images.unsplash.com/photo-1505693419148-de391ec39f58?q=80&w=800",
        descripcion: "Estructura oculta en pino certificado."
    }
];

const grid = document.getElementById('catalog-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Función para mostrar proyectos
function displayProjects(filter = 'all') {
    // Limpiar grid
    grid.innerHTML = "";

    // Filtrar proyectos
    const filtered = filter === 'all' 
        ? proyectos 
        : proyectos.filter(p => p.categoria === filter);

    // Crear HTML
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${p.imagen}" alt="${p.titulo}" loading="lazy">
            </div>
            <div class="project-info">
                <span>${p.categoria}</span>
                <h3>${p.titulo}</h3>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Eventos de los botones de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Cambiar clase activa
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filtrar
        const filterValue = btn.getAttribute('data-filter');
        displayProjects(filterValue);
    });
});

// Carga inicial
window.addEventListener('DOMContentLoaded', () => {
    displayProjects();
});