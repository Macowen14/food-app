import React from "react";
import "./menu.scss";
import FoodDisplay from "../foodDisplay/FoodDisplay";

const Menu = () => {
  return (
    <section className="menu container" id="menu">
      <h1>Explore Our Menu</h1>
      <p className="menu-text">
        Explore from the diverse menu we got. Here are among some of our best
        delicious and healthy meals.
      </p>
      <FoodDisplay />
    </section>
  );
};

export default Menu;
