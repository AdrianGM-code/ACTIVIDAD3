const customCursorButtons = document.querySelectorAll('.custom-cursor-btn, .legos-cursor-custom');

customCursorButtons.forEach(button =>{
    button.addEventListener('mouseenter', () =>{
        if(button.classList.contains('custom-cursor-btn')){
            button.style.cursor = 'url("ima/icon32.png"), auto'; 
        } else if (button.classList.contains('legos-cursor-custom')){
            button.style.cursor = 'url("ima/lego.png"), auto';
        }
    });

    button.addEventListener('mousleave', ()=>{
        button.style.cursor = 'default';
    });
});


// Función para manejar el efecto mouse over en las imágenes
function addImageHoverEffect() {
    const productImages = document.querySelectorAll('.product-card img');

    productImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.opacity = '0.7'; // Cambiar la opacidad al pasar el mouse
            this.style.transform = 'scale(1.25)'; // Aumentar el tamaño ligeramente
            this.style.transition = 'opacity 0.3s, transform 0.3s'; // Añadir transición suave
        });

        image.addEventListener('mouseout', function() {
            this.style.opacity = '1'; // Volver a la opacidad normal
            this.style.transform = 'scale(1)'; // Volver al tamaño original
        });
    });
}

// Llama a la función cuando se carga la página
window.onload = function() {
    addImageHoverEffect(); // Agregar el efecto hover a las imágenes
};
