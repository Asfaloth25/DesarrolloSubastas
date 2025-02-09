function placeBid(item) {
    alert("Has pujado por: " + item);
}

function viewInfo(page) {
    window.location.href = page;
}
function redirectToResults(event) {
    event.preventDefault();
    const query = document.getElementById('search').value.trim();
    if (query) {
        window.location.href = `resultados.html?search=${encodeURIComponent(query)}`;
    }
}


document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("search");

  if (query) {
    document.getElementById("search").value = query;
    searchAuctions(query);
  }
});

async function searchAuctions(query) {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();
    displayAuctions(data.products);
}

function displayAuctions(auctions) {
    const container = document.getElementById('auction-results');
    container.innerHTML = '';

    if (auctions.length === 0) {
    container.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
    }

    auctions.forEach(auction => {
    const auctionElement = document.createElement('div');
    auctionElement.classList.add('item-info'); 

    auctionElement.innerHTML = `
        <img class="img-info" src="${auction.thumbnail}" alt="${auction.title}">
        <div class="more-information">
            <h3>${auction.title}</h3>
            <p>${auction.brand || "Vendedor desconocido"}</p>
            <div class="description">
                <p>${auction.description}</p>
            </div>
            <hr class="red-line">
            <p class="total-bidders">Total de personas pujando: ${Math.floor(Math.random() * 10) + 1}</p>
        </div>
        <div class="buttons">
            <button class="bid" onclick="placeBid('${auction.title}')">Puja ya: ${auction.price}$</button>
        
        </div>
        <br>
    `;

    container.appendChild(auctionElement);
    });
    }


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
    
    // Agregar validación para la foto del DNI
    const dniPhotoInput = document.getElementById("dni_photo");
    const dniPhotoError = document.createElement("p");
    dniPhotoError.style.color = "red";
    dniPhotoError.style.display = "none";
    dniPhotoInput.insertAdjacentElement("afterend", dniPhotoError);

    // Cargar provincias según comunidad seleccionada
    const comunidadSelect = document.getElementById("comunidad");
    const provinciaSelect = document.getElementById("provincia");

    const provincias = {
        Madrid: ["Madrid", "Alcalá de Henares", "Móstoles"],
        Cataluña: ["Barcelona", "Girona", "Tarragona"],
        Andalucía: ["Sevilla", "Granada", "Málaga"],
        "Comunidad Valenciana": ["Valencia", "Alicante", "Castellón"],
        Galicia: ["A Coruña", "Pontevedra", "Lugo"]
    };

    comunidadSelect.addEventListener("change", function() {
        const comunidad = comunidadSelect.value;
        const provinciasList = provincias[comunidad] || [];
        
        // Limpiar opciones anteriores
        provinciaSelect.innerHTML = '<option value="">Selecciona una provincia</option>';
        
        // Agregar nuevas provincias
        provinciasList.forEach(function(provincia) {
            const option = document.createElement("option");
            option.value = provincia;
            option.textContent = provincia;
            provinciaSelect.appendChild(option);
        });
    });

    // Función de validación para la contraseña
    function validatePassword() {
        const passwordValue = password.value;
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(passwordValue)) {
            password.style.border = "2px solid red";
            passwordError.textContent = "La contraseña tiene que tener al menos 8 caracteres, una mayúscula, un número y un carácter especial";
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
            confirmAgeError.textContent = "Los usuarios tienen que ser mayores de edad";
            confirmAgeError.style.display = "block";
            return false;
        } else {
            birthdate.style.border = "";
            confirmAgeError.style.display = "none";
            return true;
        }
    }

    function validateDniPhoto() {
        if (!dniPhotoInput.files.length) {
            dniPhotoInput.style.border = "2px solid red";
            dniPhotoError.textContent = "Es necesaria una foto de tu DNI";
            dniPhotoError.style.display = "block";
            return false;
        } else {
            dniPhotoInput.style.border = "";
            dniPhotoError.style.display = "none";
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
    dniPhotoInput.addEventListener("change", validateDniPhoto);
    
    form.addEventListener("submit", function (e) {
        if (!validatePassword() || !validateConfirmPassword() || !validateBirthdate() || !validateDniPhoto()) {
            e.preventDefault();
        }
    });

    window.togglePasswordVisibility = togglePasswordVisibility;
});

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
    
    // Agregar validación para la foto del DNI
    const dniPhotoInput = document.getElementById("dni_photo");
    const dniPhotoError = document.createElement("p");
    dniPhotoError.style.color = "red";
    dniPhotoError.style.display = "none";
    dniPhotoInput.insertAdjacentElement("afterend", dniPhotoError);

    // Cargar provincias según comunidad seleccionada
    const comunidadSelect = document.getElementById("comunidad");
    const provinciaSelect = document.getElementById("provincia");

    const provincias = {
        Madrid: ["Madrid", "Alcalá de Henares", "Móstoles"],
        Cataluña: ["Barcelona", "Girona", "Tarragona"],
        Andalucía: ["Sevilla", "Granada", "Málaga"],
        "Comunidad Valenciana": ["Valencia", "Alicante", "Castellón"],
        Galicia: ["A Coruña", "Pontevedra", "Lugo"]
    };

comunidadSelect.addEventListener("change", function() {
    const comunidad = comunidadSelect.value;
    const provinciasList = provincias[comunidad] || [];
    
    // Limpiar opciones anteriores
    provinciaSelect.innerHTML = '<option value="">Selecciona una provincia</option>';
    
    // Agregar nuevas provincias
    provinciasList.forEach(function(provincia) {
        const option = document.createElement("option");
        option.value = provincia;
        option.textContent = provincia;
        provinciaSelect.appendChild(option);
    });
});

// Función de validación para la contraseña
function validatePassword() {
    const passwordValue = password.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(passwordValue)) {
        password.style.border = "2px solid red";
        passwordError.textContent = "La contraseña tiene que tener al menos 8 caracteres, una mayúscula, un número y un carácter especial";
        passwordError.style.display = "block";
        return false;
    } else {
        password.style.border = "";
        passwordError.textContent = "";
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
        confirmAgeError.textContent = "Los usuarios tienen que ser mayores de edad";
        confirmAgeError.style.display = "block";
        return false;
    } else {
        birthdate.style.border = "";
        confirmAgeError.style.display = "none";
        return true;
    }
}

function validateDniPhoto() {
    if (!dniPhotoInput.files.length) {
        dniPhotoInput.style.border = "2px solid red";
        dniPhotoError.textContent = "Es necesaria una foto de tu DNI";
        dniPhotoError.style.display = "block";
        return false;
    } else {
        dniPhotoInput.style.border = "";
        dniPhotoError.style.display = "none";
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
dniPhotoInput.addEventListener("change", validateDniPhoto);

form.addEventListener("submit", function (e) {
    if (!validatePassword() || !validateConfirmPassword() || !validateBirthdate() || !validateDniPhoto()) {
        e.preventDefault();
    }
});

window.togglePasswordVisibility = togglePasswordVisibility;
});