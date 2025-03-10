import React, { useState, useEffect } from 'react';
import SearchBar from '@/SearchBar';


const Header = () => {
    return (
        <header>
        <nav>
          <a href="/" className="logo">M&P</a>
          <a href="#">Products</a>
          <a href="/inicio">Login</a>
          <SearchBar/>
          <a href="#">Vender</a>
          {/* <div className="cart-icon">🛒</div> */}
        </nav>
      </header>
    );
}


export default Header;