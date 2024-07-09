import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import CartPage from "./pages/cart/CartPage";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import LoginForm from "./components/login/LoginForm";
import Order from "./pages/order/Order";

import Footer from "./components/footer/Footer";

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="app">
      <CartProvider>
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <>
            <Navbar login={login} setLogin={setLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order" element={<Order />} />
            </Routes>
          </>
        )}
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
