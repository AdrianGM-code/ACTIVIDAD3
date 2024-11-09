document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const passwordHint = document.getElementById("passwordHint");

    const passwordRegex = /^(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordHint.textContent = "La contraseña debe tener al menos 8 caracteres y contener números.";
        passwordHint.style.display = "block";
    } else {
        passwordHint.style.display = "none";

        // Simulación de autenticación
        alert(`Bienvenido, ${name}`);
        sessionStorage.setItem("userName", name); // Guarda el nombre temporalmente

        if (role === "admin") {
            window.location.href = "TABLA.html";
        } else {
            window.location.href = "Index.html";
        }

        document.getElementById("loginForm").reset();
        document.getElementById("loginModal").style.display = "none";
    }
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "none";
});
