const btnAbrirModalTerminar = document.querySelector("#btn-modal-terminar");
const btnCerrarModalTerminar = document.querySelector("#btn-cerrar-modal-terminar");
const modalTerminar = document.querySelector("#modal-terminar");

// Asegúrate de que el modal esté oculto inicialmente con CSS
modalTerminar.style.display = 'none';

btnAbrirModalTerminar.addEventListener("click", () => {
    modalTerminar.style.display = 'block'; // Hace visible el modal
    modalTerminar.style.opacity = 0; // Inicia la opacidad en 0 para animarla
    modalTerminar.style.transition = 'opacity 0.4s ease'; // Suaviza la transición de la opacidad
    
    // Agrega un retraso antes de cambiar la opacidad
    setTimeout(() => {
        requestAnimationFrame(() => {
            modalTerminar.style.opacity = 1; // Anima la opacidad a 1 para mostrar el modal
        });
    }, 300); // Cambia este valor para ajustar el retraso (en milisegundos)

    modalTerminar.showModal();
    // Centra el modal en la pantalla con CSS
    modalTerminar.style.position = 'fixed';
    modalTerminar.style.top = '50%';
    modalTerminar.style.left = '50%';
    modalTerminar.style.transform = 'translate(-50%, -50%)';

    // Agrega el event listener para cerrar la modal al hacer clic fuera de ella
    window.addEventListener("click", (event) => {
        if (event.target === modalTerminar) {
            modalTerminar.style.opacity = 0; // Inicia la animación de desvanecimiento
            modalTerminar.addEventListener('transitionend', () => {
                modalTerminar.style.display = 'none'; // Oculta el modal después de la animación
                modalTerminar.close();
            }, { once: true }); // Asegúrate de que el evento se ejecute una sola vez
        }
    });
});

btnCerrarModalTerminar.addEventListener("click", () => {
    modalTerminar.style.opacity = 0; // Inicia la animación de desvanecimiento
    modalTerminar.addEventListener('transitionend', () => {
        modalTerminar.style.display = 'none'; // Oculta el modal después de la animación
        modalTerminar.close();
    }, { once: true }); // Asegúrate de que el evento se ejecute una sola vez
});














