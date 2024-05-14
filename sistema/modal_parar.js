const btnAbrirModalParar = document.querySelector("#btn-modal-parar");
const btnCerrarModalParar = document.querySelector("#btn-cerrar-modal-parar");
const modalParar = document.querySelector("#modal-parar");

// Asegúrate de que el modal esté oculto inicialmente con CSS
modalParar.style.display = 'none';

btnAbrirModalParar.addEventListener("click", () => {
    modalParar.style.display = 'block'; // Hace visible el modal
    modalParar.style.opacity = 0; // Inicia la opacidad en 0 para animarla
    modalParar.style.transition = 'opacity 0.4s ease'; // Suaviza la transición de la opacidad
    
    // Agrega un retraso antes de cambiar la opacidad
    setTimeout(() => {
        requestAnimationFrame(() => {
            modalParar.style.opacity = 1; // Anima la opacidad a 1 para mostrar el modal
        });
    }, 300); // Cambia este valor para ajustar el retraso (en milisegundos)

    modalParar.showModal();
    // Centra el modal en la pantalla con CSS
    modalParar.style.position = 'fixed';
    modalParar.style.top = '50%';
    modalParar.style.left = '50%';
    modalParar.style.transform = 'translate(-50%, -50%)';

    // Agrega el event listener para cerrar la modal al hacer clic fuera de ella
    window.addEventListener("click", (event) => {
        if (event.target === modalParar) {
            modalParar.style.opacity = 0; // Inicia la animación de desvanecimiento
            modalParar.addEventListener('transitionend', () => {
                modalParar.style.display = 'none'; // Oculta el modal después de la animación
                modalParar.close();
            }, { once: true }); // Asegúrate de que el evento se ejecute una sola vez
        }
    });
});

btnCerrarModalParar.addEventListener("click", () => {
    modalParar.style.opacity = 0; // Inicia la animación de desvanecimiento
    modalParar.addEventListener('transitionend', () => {
        modalParar.style.display = 'none'; // Oculta el modal después de la animación
        modalParar.close();
    }, { once: true }); // Asegúrate de que el evento se ejecute una sola vez
});

















