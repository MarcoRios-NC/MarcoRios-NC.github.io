let currentStep = 1;
const totalSteps = 4;

// Objeto de Estado del Proyecto
let projectData = {
    category: '',
    material: '',
    dimensions: {
        l: '',
        h: '',
        d: ''
    }
};

// 1. Manejo de Selección de Tarjetas
document.querySelectorAll('.selection-card').forEach(card => {
    card.addEventListener('click', function() {
        const type = this.dataset.type;
        const value = this.dataset.value;

        // Limpiar selección previa en el mismo paso
        this.parentElement.querySelectorAll('.selection-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');

        // Guardar dato
        projectData[type] = value;

        // Auto-avanzar después de un pequeño delay
        setTimeout(() => nextStep(), 400);
    });
});

// 2. Navegación entre Pasos
function nextStep() {
    if (currentStep === 3) {
        // Validar medidas antes de pasar al resumen
        projectData.dimensions.l = document.getElementById('input-length').value;
        projectData.dimensions.h = document.getElementById('input-height').value;
        projectData.dimensions.d = document.getElementById('input-depth').value;

        if (!projectData.dimensions.l || !projectData.dimensions.h) {
            alert("Por favor indica las medidas básicas.");
            return;
        }
        renderSummary();
    }

    if (currentStep < totalSteps) {
        changeStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        changeStep(currentStep - 1);
    }
}

function changeStep(step) {
    document.querySelector(`[data-step="${currentStep}"]`).classList.remove('active');
    currentStep = step;
    document.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
    
    // Actualizar Barra de Progreso
    const progress = (currentStep / totalSteps) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// 3. Renderizar Resumen Final
function renderSummary() {
    const box = document.getElementById('summary-box');
    box.innerHTML = `
        <p><strong>Forma de la Cocina:</strong> ${projectData.category}</p>
        <p><strong>Color de la Cocina:</strong> ${projectData.color}</p>
        <p><strong>Medidas:</strong> ${projectData.dimensions.l}x${projectData.dimensions.h}x${projectData.dimensions.d} cm</p>
        <mark style="background-color: #bcbcbc !important; color: var(--text-main); padding: 5px; font-style: italic; border-radius:0.4em">
            Haga clic en el botón de abajo para enviar estos detalles al taller y recibir costo aproximado.
        </mark>
    `;
}

// 4. Envío al correo
function sendEmail() {
    const emailTo = "theEmail@example.com";
    const title = `Cotizacion de ${projectData.category}`
    const text = `Hola! Me gustaría cotizar un proyecto:\n\n` +
                 `*Categoría:* ${projectData.category}\n` +
                 `*Color:* ${projectData.color}\n` +
                 `*Dimensiones:* ${projectData.dimensions.l}cm largo x ${projectData.dimensions.h}cm alto x ${projectData.dimensions.d}cm fondo\n\n` +
                 `¿Podrían darme un costo aproximado? Gracias.`;

    const mailtoLink = `mailto:${emailTo}?subject=${title}&body=${text}`;
    window.open(mailtoLink, '_self');
}