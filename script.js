document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector('.grid');
    const items = document.querySelectorAll('.grid-item');

    // 1. Añadir rotación aleatoria sutil a cada elemento para el look "collage hecho a mano"
    items.forEach(item => {
        const randomRotate = (Math.random() * 6 - 3).toFixed(2); // Inclinación entre -3 y 3 grados
        item.style.setProperty('--rotation', `${randomRotate}deg`);
    });

    // 2. Inicializar Isotope con las columnas centradas a lo ancho de la pantalla
    imagesLoaded(grid, function() {
        new Isotope(grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: 280, // Ancho de tus tarjetas
                gutter: 20,       // Espacio entre tarjetas
                isFitWidth: true  // ¡ESTA ES LA MAGIA! Centra el bloque a lo ancho de la página
            }
        });
    });
});