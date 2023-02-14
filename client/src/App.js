import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, ProductPage } from "./pages/home";
import { Navbar ,Cart, Login, Register } from "./pages/global";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
