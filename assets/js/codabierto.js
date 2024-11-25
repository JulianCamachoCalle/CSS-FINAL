// Selecciona todas las tarjetas y el contenedor principal
const cards = document.querySelectorAll('codabierto-card');
const container = document.querySelector('codabierto-card-container');

// Añade evento de clic a cada tarjeta
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Elimina cualquier tarjeta activa existente
        document.querySelectorAll('.active').forEach(activeCard => {
            activeCard.classList.remove('active');
        });

        // Añade la clase 'active' a la tarjeta seleccionada
        card.classList.add('active');

        // Oscurece el resto del contenido
        container.classList.add('dimmed');
    });
});

// Cierra la tarjeta activa al hacer clic fuera de ella
document.addEventListener('click', (e) => {
    if (!e.target.closest('codabierto-card')) {
        document.querySelectorAll('.active').forEach(activeCard => {
            activeCard.classList.remove('active');
        });

        // Restablece el fondo
        container.classList.remove('dimmed');
    }
});
