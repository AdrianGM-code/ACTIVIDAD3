// Función para mostrar el formulario de recuperación de contraseña
function showRecoveryForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('recoveryForm').style.display = 'block';
}

// Función para ocultar el formulario de recuperación de contraseña
function hideRecoveryForm() {
    document.getElementById('recoveryForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Evento de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Admin" && password === "Admin123") {
        window.location.href = "inventario.html";
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            window.location.href = "home.html";
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    }
});

// Evento de recuperación de contraseña
document.getElementById('recoveryPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameRecovery = document.getElementById('usernameRecovery').value;
    const newPassword = document.getElementById('newPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.username === usernameRecovery);

    if (userIndex !== -1) {
        // Actualiza la contraseña
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert("Contraseña cambiada exitosamente");
        hideRecoveryForm(); // Oculta el formulario de recuperación
    } else {
        alert("Usuario no encontrado");
    }
});
