document.addEventListener('cartCount', function(e) {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = `Artículos en el carrito: ${e.detail.count}`;
});