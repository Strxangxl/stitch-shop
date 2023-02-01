import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/global/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/home/Cart";
import Register from "./pages/home/Register";
import Login from "./pages/home/Login";
import ProductPage from "./pages/home/ProductPage";

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
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
