"use client"
import React from "react";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {

  // Función para manejar la puja
  const placeBid = (item) => {
    alert(`Pujando por: ${item}`);
  };

  // Función para manejar la visualización de información
  const viewInfo = (url) => {
    // Redirigir a la URL de la información del artículo
    window.location.href = url;
  };

  return (
    <div className="container">
      <Header/>
      <main>
        <h1>MARCOS Y PEDRO</h1>
        <h2>Lo están petando:</h2>
        <div className="items">
          {/* Item 1 */}
          <div className="item">
            <div className="fire-icon">🔥</div>
            <img src="silla.jpg" alt="Silla" />
            <div className="info">
              <h3>Vendo silla</h3>
              <p>Jorge Enebral</p>
            </div>
            <div className="buttons">
              <button
                className="bid"
                onClick={() => placeBid("Silla")}
              >
                Puja ya: 25$
              </button>
              <button
                className="info-btn"
                onClick={() => viewInfo("silla-info")}
              >
                Ver información
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="item">
            <div className="fire-icon">🔥</div>
            <img src="camiseta.jpg" alt="Camiseta" />
            <div className="info">
              <h3>Camiseta</h3>
              <p>Mario Alonso</p>
            </div>
            <div className="buttons">
              <button
                className="bid"
                onClick={() => placeBid("Camiseta")}
              >
                Puja ya: 50$
              </button>
              <button
                className="info-btn"
                onClick={() => viewInfo("camiseta-info")}
              >
                Ver información
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="item">
            <div className="fire-icon">🔥</div>
            <img src="mesa.jpg" alt="Mesa" />
            <div className="info">
              <h3>Mesa</h3>
              <p>Jorge Enebral</p>
            </div>
            <div className="buttons">
              <button
                className="bid"
                onClick={() => placeBid("Mesa")}
              >
                Puja ya: 22$
              </button>
              <button
                className="info-btn"
                onClick={() => viewInfo("mesa-info")}
              >
                Ver información
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
