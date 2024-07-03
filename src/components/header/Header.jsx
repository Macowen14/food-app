import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header" data-aos="fade-up" data-aos-duration="1000">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Explore our diverse menu filled with mouthwatering options, ranging
          from savory burgers and crispy pizzas to comforting pastas, refreshing
          salads, and indulgent desserts. Whether you're craving a quick bite or
          a hearty meal, we have something to satisfy every palate.
        </p>
        <button className="btn">view menu</button>
      </div>
    </header>
  );
};

export default Header;
