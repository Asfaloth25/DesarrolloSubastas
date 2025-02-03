document.getElementById("sign_in_form").addEventListener("submit", function (event) {
    const password = document.getElementById("pword").value;
    const confirmPassword = document.getElementById("confirmpword").value;

    const errorMessage = document.getElementById("error_message");

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMessage.style.display = "block";
        errorMessage.textContent = "Las contraseñas no son iguales";
    } else {
        errorMessage.style.display = "none";
        alert("Las contraseñas coinciden. Redirigiendo a la página de inicio de sesión...");
    }
});