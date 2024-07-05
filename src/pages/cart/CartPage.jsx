import React from "react";
import "./cart.scss";
import Cart from "../../components/cart/Cart";
import { CartProvider } from "react-use-cart";

const CartPage = () => {
  return (
    <>
      <CartProvider>
        <Cart />
      </CartProvider>
    </>
  );
};

export default CartPage;
