import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./pages/global";
import { Loading } from "./components";

const Home = lazy(() => import("./pages/home/Home"));
const ProductPage= lazy(() => import("./pages/home/ProductPage"));

const Cart = lazy(() => import("./pages/global/Cart"));
const Login = lazy(() => import("./pages/global/Login"));
const Register = lazy(() => import("./pages/global/Register"));
const Profile = lazy(() => import("./pages/global/Profile"));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
