"use client";
import React, { useState, useEffect } from 'react';
import '../globals.css';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function ProductButton({ product }) {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    navigate(`/detalle/${product.id}`); // Redirects to product details page
  };

  return (
    <div key={product.id} className="item-info">
      <img className="img-info" src={product.thumbnail} alt={product.title} />
      <div className="more-information">
        <h3>{product.title}</h3>
        <p>{product.brand || 'Vendedor desconocido'}</p>
        <div className="description">
          <p>{product.description}</p>
        </div>
        <hr className="red-line" />
        <p className="total-bidders">Total de personas pujando: {Math.floor(Math.random() * 10) + 1}</p>
      </div>
      <div className="buttons">
        <button className="bid">Puja ya: {product.price}$</button>
        <button className="" onClick={handleClick}>Ver detalles</button>
      </div>
      <br />
    </div>
  );
}

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Función para manejar el envío del formulario de búsqueda
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Recargar la página con el query en la URL
      window.location.href = `?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Función para obtener los productos de la API
  const fetchProducts = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para obtener la búsqueda desde la URL y cargar productos
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('search');
    if (query) {
      setSearchQuery(query);
      fetchProducts(query);
    }
  }, [window.location.search]);

  return (
    <div className="container">
      <Header />

      <main>
        <h1>Resultados de búsqueda</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div id="auction-results" className="auction-container">
            {products.length === 0 ? (
              <p>No se encontraron resultados.</p>
            ) : (
              products.map((product) => (
                <ProductButton key={product.id} product={product} />
              ))
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default SearchPage;
