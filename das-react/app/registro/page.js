"use client"
import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";


const RegistroUsuario = () => {
  const [provincia, setProvincia] = useState("");
  const [comunidad, setComunidad] = useState("");

  const provincias = {
    Madrid: ["Madrid", "Alcalá de Henares", "Móstoles"],
    Cataluña: ["Barcelona", "Gerona", "Tarragona"],
    Andalucía: ["Sevilla", "Granada", "Málaga"],
    "Comunidad_Valenciana": ["Valencia", "Alicante", "Castellón"],
    Galicia: ["A Coruña", "Pontevedra", "Lugo"]
  };

  const handleComunidadChange = (event) => {
    const selectedComunidad = event.target.value;
    setComunidad(selectedComunidad);
    setProvincia(""); // Resetea la provincia al cambiar de comunidad
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="container">
      <Header/>
      <main className="form-container">
        <div className="form-container">
          <form id="sign_in_form" className="form-box" onSubmit={handleSubmit}>
            <h2>Registro de usuario</h2>

            <div className="input-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input type="text" id="username" name="username" className="form-input" placeholder="Jorge Enebral" required />
            </div>

            <div className="input-group">
              <label htmlFor="birthdate">Día de nacimiento</label>
              <input type="date" id="birthdate" name="birthdate" className="form-input" required />
              <p id="birthdate_error_message" className="error-message" style={{ display: "none" }}></p>
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" name="email" className="form-input" required placeholder="yourmail@mail.com" />
            </div>

            <div className="input-group">
              <label htmlFor="pword" className="form-label">Contraseña</label>
              <input type="password" id="pword" name="pword" className="form-input" required placeholder="SafePassword1234" />
              <span id="togglePword" className="toggle-password">👁️</span>
            </div>

            <div className="input-group">
              <label htmlFor="confirmpword" className="form-label">Confirmar contraseña</label>
              <input type="password" id="confirmpword" name="confirmpword" className="form-input" required placeholder="SafePassword1234" />
              <span id="toggleConfPword" className="toggle-password">👁️</span>
              <p id="error_message" className="error-message" style={{ display: "none" }}>Las contraseñas no encajan</p>
            </div>

            <div className="input-group">
              <label htmlFor="dni_photo" className="form-label">Sube una foto de tu DNI:</label>
              <input type="file" id="dni_photo" name="dni_photo" className="form-input" accept="image/*" required />
            </div>

            <div className="input-group">
              <label htmlFor="comunidad" className="form-label">Comunidad Autónoma:</label>
              <select id="comunidad" name="comunidad" className="form-input" required onChange={handleComunidadChange}>
                <option value="">Selecciona una comunidad</option>
                <option value="Madrid">Madrid</option>
                <option value="Cataluña">Cataluña</option>
                <option value="Andalucía">Andalucía</option>
                <option value="Valencia">Comunidad Valenciana</option>
                <option value="Galicia">Galicia</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="provincia" className="form-label">Provincia:</label>
              <select id="provincia" name="provincia" className="form-input" required value={provincia} onChange={(e) => setProvincia(e.target.value)}>
              <option value="">Selecciona una comunidad</option>
              {comunidad && provincias[comunidad] && provincias[comunidad].map((provincia) => (
                <option key={provincia} value={provincia}>{provincia}</option>
              ))}

              </select>
            </div>

            <button type="submit" className="form-button">Sign in</button>
            <button type="reset" className="form-button">Borrar datos</button>
            <br />
            <legend>¿Ya tienes cuenta?</legend>
            <button type="button" className="form-button" onClick={() => window.location.href = '/inicio'}>Iniciar sesión</button>
            <button type="button" className="form-button" onClick={() => window.location.href = '/'}>Página principal</button>
          </form>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default RegistroUsuario;
