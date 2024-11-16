document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert("El usuario ya existe.");
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("BIenvenido a la Familia. Ahora puedes iniciar sesión.");
        window.location.href = "login.html";
    }
});