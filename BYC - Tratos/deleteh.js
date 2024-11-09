document.addEventListener('historialProductoEliminado', function(event) {
    historialEliminados.push(event.detail);
    
    // Mostrar el historial en la página
    const historialContainer = document.getElementById('historial-eliminados');
    const li = document.createElement('li');
    li.textContent = `${event.detail.name} - $${event.detail.price.toFixed(2)}`;
    historialContainer.appendChild(li);
});