const darkModeEvent = new CustomEvent('darkModeEvent');

    // Escuchar el evento 'darkModeEvent' y cambiar el fondo a negro
    document.addEventListener('darkModeEvent', () => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'; // Cambiar también el color del texto a blanco para visibilidad
    });

    // Función para disparar el evento
    function triggerDarkMode() {
        document.dispatchEvent(darkModeEvent);
    }

    // Asignar el evento 'click' al botón para activar el modo oscuro
    document.querySelector('#darkModeButton').addEventListener('click', () => {
        triggerDarkMode();
    });