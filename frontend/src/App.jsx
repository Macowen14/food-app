import React, { lazy, Suspense, useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

// Lazy load components with preloading
const Footer = lazy(() => import("./components/footer/Footer"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const LoginForm = lazy(() => import("./components/login/LoginForm"));
const Order = lazy(() => import("./pages/order/Order"));
const Contact = lazy(() => import("./pages/contactPage/Contact"));

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="app">
      <CartProvider>
        {login ? (
          <Suspense fallback={<div>Loading login form...</div>}>
            <LoginForm setLogin={setLogin} />
          </Suspense>
        ) : (
          <>
            <Navbar login={login} setLogin={setLogin} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/cart"
                element={
                  <Suspense fallback={<div>Loading cart...</div>}>
                    <CartPage />
                  </Suspense>
                }
              />
              <Route
                path="/order"
                element={
                  <Suspense fallback={<div>Loading order...</div>}>
                    <Order />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<div>Loading contact page ....</div>}>
                    <Contact />
                  </Suspense>
                }
              />
            </Routes>
          </>
        )}
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </CartProvider>
    </div>
  );
};

export default App;
