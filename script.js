document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidad del Modal de la Galería ---

    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const closeBtn = document.querySelector('.close-button');

    // Función para abrir el modal con una imagen específica
    const openModal = (src) => {
        modal.style.display = 'block';
        modalImg.src = src;
    };

    // Agrega un evento de clic a cada imagen de la galería
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });

    // Función para cerrar el modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Cierra el modal al hacer clic en la 'X'
    closeBtn.addEventListener('click', closeModal);

    // Cierra el modal al hacer clic fuera de la imagen
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // --- Animación de elementos al hacer scroll (Re-aparecen al ser visibles) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1.5s ease-out forwards`;
            } else {
                // Opcional: para que se reanimen al volver a aparecer
                entry.target.style.animation = 'none';
                entry.target.style.opacity = '0';
            }
        });
    }, { threshold: 0.1 }); // Se anima cuando el 10% del elemento es visible

    // Oculta las secciones al inicio y las observa
    document.querySelectorAll('.message-section, .gallery-section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
});