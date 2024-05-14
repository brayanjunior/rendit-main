const btnAbrirModal = document.querySelector("#btn-modal-iniciar");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal-iniciar");
const modalInicio = document.querySelector("#modal-iniciar");

// Asegúrate de que el modal esté oculto inicialmente con CSS
modalInicio.style.display = 'none';

btnAbrirModal.addEventListener("click", () => {
    modalInicio.style.display = 'block'; // Hace visible el modal
    modalInicio.style.opacity = 0; // Inicia la opacidad en 0 para animarla
    modalInicio.style.transition = 'opacity 0.4s ease'; // Suaviza la transición de la opacidad
    
    // Agrega un retraso antes de cambiar la opacidad
    setTimeout(() => {
        requestAnimationFrame(() => {
            modalInicio.style.opacity = 1; // Anima la opacidad a 1 para mostrar el modal
        });
    }, 300); // Cambia este valor para ajustar el retraso (en milisegundos)

    modalInicio.showModal();
    // Centra el modal en la pantalla con CSS
    modalInicio.style.position = 'fixed';
    modalInicio.style.top = '50%';
    modalInicio.style.left = '50%';
    modalInicio.style.transform = 'translate(-50%, -50%)';

    // Agrega el event listener para cerrar la modal al hacer clic fuera de ella
    window.addEventListener("click", (event) => {
        if (event.target === modalInicio) {
            modalInicio.style.opacity = 0; // Inicia la animación de desvanecimiento
            modalInicio.addEventListener('transitionend', () => {
                modalInicio.style.display = 'none'; // Oculta el modal después de la animación
                modalInicio.close();
            }, { once: true }); // Asegúrate de que el evento se ejecute una sola vez
        }
    });
});

btnCerrarModal.addEventListener("click", () => {
    modalInicio.style.opacity = 0; // Inicia la animación de desvanecimiento
    modalInicio.addEventListener('transitionend', () => {
        modalInicio.style.display = 'none'; // Oculta el modal después de la animación
        modalInicio.close();
    }, { once: true }); // Asegúrate de que el evento se ejecute una sola vez
});









