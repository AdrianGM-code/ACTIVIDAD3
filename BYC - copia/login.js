
document.querySelector(".user-menu a").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loginModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "none";
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const passwordHint = document.getElementById("passwordHint");

    const passwordRegex = /^(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordHint.textContent = "La contraseña debe tener al menos 8 caracteres y contener números.";
        passwordHint.style.display = "block";
    } else {
        passwordHint.style.display = "none";
        alert("Registro exitoso"); 
        document.getElementById("loginForm").reset(); 
        document.getElementById("loginModal").style.display = "none"; 
    }
});
