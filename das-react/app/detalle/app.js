"use client"
import React, { useState } from "react";
import '../globals.css';
import Header from "../Header";
import Footer from "../Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;
