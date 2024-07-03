import React, { useState } from "react";
import "./navbar.scss";
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (link) => {
    setActive(link);
  };
  console.log("navbar active link is", active);
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Easy Meal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiMenu />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={active === "home" ? "active nav-link" : "nav-link"}
                  href="/"
                  onClick={() => handleClick("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={active === "menu" ? "active nav-link" : "nav-link"}
                  href="#menu"
                  onClick={() => handleClick("menu")}
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    active === "mobile-app" ? "active nav-link" : "nav-link"
                  }
                  href="/mobile-app"
                  onClick={() => handleClick("mobile-app")}
                >
                  Mobile App
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    active === "contact-us" ? "active nav-link" : "nav-link"
                  }
                  href="/contact-us"
                  onClick={() => handleClick("contact-us")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="navbar-right ms-auto">
              <span className="search-icon">
                <FiSearch />
              </span>
              <span className="basket-icon">
                <FaShoppingBasket />
                <span className="basket-items">0</span>
              </span>
              <button className="btn">Sign in</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
