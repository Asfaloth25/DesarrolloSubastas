"use client"
import React, { useState } from "react";
import '../globals.css';
import SearchBar from "@/SearchBar";

function Header() {
  return (
    <header>
      <nav>
        <a href="/" className="logo">M&P</a>
        <a href="#">Products</a>
        <a href="/inicio">Login</a>
        <SearchBar />
        <a href="#">Vender</a>
        <div className="cart-icon">🛒</div>
      </nav>
    </header>
  );
}

function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías hacer la lógica de validación y envío de datos
    alert(`Usuario: ${usuario}\nContraseña: ${contraseña}`);
  };

  return (
    <main className="form-container">
      <div className="form-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <div className="input-group">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Introduce tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="Introduce tu contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Entrar</button>
          <p className="form-text">
            ¿No tienes cuenta? <a href="registro">Regístrate aquí</a>
          </p>
        </form>
      </div>
    </main>
  );
}



function App() {
  return (
    <div className="container">
      <Header />
      <LoginForm />
      <footer>
        <div className="footer-links">
          <a href="#">Sobre la empresa</a>
          <a href="#">Contacta con nosotros</a>
        </div>
        <p>Página web creada por Pedro Meseguer y Marcos Garrido</p>
      </footer>
    </div>
  );
}

export default App;
