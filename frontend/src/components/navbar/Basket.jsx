import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useCart } from "react-use-cart";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

// Navbar component with a shopping basket icon and total item count
const Basket = () => {
  const { totalItems } = useCart();

  return (
    <NavLink to="/cart">
      <span className="basket-icon">
        <FaShoppingBasket />
        <span className="basket-items">{totalItems}</span>
      </span>
    </NavLink>
  );
};

export default Basket;
