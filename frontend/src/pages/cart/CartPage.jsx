import React from "react";
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
