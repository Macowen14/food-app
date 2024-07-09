import React, { useState } from "react";
import "./navbar.scss";
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { useCart } from "react-use-cart";

const Navbar = ({ setLogin }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const cartItems = totalItems;

  const handleNavigation = (path, hash) => {
    navigate(path); // Navigate to the home page
    setTimeout(() => {
      const element = document.getElementById(hash); // Scroll to the desired section
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure the navigation occurs before scrolling
  };

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Easy Meal
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaX /> : <FiMenu />}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => handleNavigation("/", "header")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => handleNavigation("/", "menu")}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => handleNavigation("/", "mobile-app")}
              >
                Mobile App
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="navbar-right ms-auto">
            <span className="search-icon">
              <FiSearch />
            </span>
            <NavLink to="/cart">
              <span className="basket-icon">
                <FaShoppingBasket />
                <span className="basket-items">{cartItems}</span>
              </span>
            </NavLink>
            <button
              className="btn"
              onClick={() => {
                setLogin(true);
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
