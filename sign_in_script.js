document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("pword");
    const confirmPassword = document.getElementById("confirmpword");
    const passwordError = document.createElement("p");
    passwordError.style.color = "red";
    passwordError.style.display = "none";
    password.insertAdjacentElement("afterend", passwordError);
    
    const confirmPasswordError = document.getElementById("error_message");
    const birthdate = document.getElementById("birthdate");
    const form = document.getElementById("sign_in_form");
    
    function validatePassword() {
        const passwordValue = password.value;
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(passwordValue)) {
            password.style.border = "2px solid red";
            passwordError.textContent = "Password must be at least 8 characters, contain a number, a special character, and an uppercase letter.";
            passwordError.style.display = "block";
            return false;
        } else {
            password.style.border = "";
            passwordError.style.display = "none";
            return true;
        }
    }

    function validateConfirmPassword() {
        if (password.value !== confirmPassword.value) {
            confirmPassword.style.border = "2px solid red";
            confirmPasswordError.style.display = "block";
            return false;
        } else {
            confirmPassword.style.border = "";
            confirmPasswordError.style.display = "none";
            return true;
        }
    }

    function validateBirthdate() {
        const confirmAgeError = document.getElementById("birthdate_error_message");
        const birthDateValue = new Date(birthdate.value);
        const today = new Date();
        const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        if (birthDateValue > minDate) {
            birthdate.style.border = "2px solid red";
            confirmAgeError.textContent = "Users must be at least 18 years old";
            confirmAgeError.style.display = "block";
            return false;
        } else {
            birthdate.style.border = "";
            confirmAgeError.style.display = "none";
            return true;
        }
    }

    function togglePasswordVisibility(inputId, iconId) {
        const input = document.getElementById(inputId);
        const icon = document.getElementById(iconId);
        if (input.type === "password") {
            input.type = "text";
            icon.textContent = "🙈";
        } else {
            input.type = "password";
            icon.textContent = "👁️";
        }
    }

    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);
    birthdate.addEventListener("input", validateBirthdate);
    
    form.addEventListener("submit", function (e) {
        if (!validatePassword() || !validateConfirmPassword() || !validateBirthdate()) {
            e.preventDefault();
        }
    });

    window.togglePasswordVisibility = togglePasswordVisibility;
});
