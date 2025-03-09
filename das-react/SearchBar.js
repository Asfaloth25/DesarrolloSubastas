import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  // Al montar el componente, revisa si hay un parámetro "search" en la URL y actualiza el input
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('search');
    if (q) {
      setQuery(q);
    }
  }, []);

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Redirige agregando el query a la URL
      window.location.href = `subastas/?search=${encodeURIComponent(query)}`;
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
