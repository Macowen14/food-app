import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CartPage from "./pages/cart/CartPage";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
};

export default App;
