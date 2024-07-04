import React, { useContext, useState } from "react";
import "./menu.scss";
import { BsCart4 } from "react-icons/bs";
import Meals from "../../data/Meals";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  console.log(selectedCategory);
  const filteredMeals =
    selectedCategory === "All"
      ? Meals.flatMap((category) => category.items)
      : Meals.find((category) => category.name === selectedCategory)?.items ||
        [];

  return (
    <section className="menu container" id="menu">
      <h1>Explore Menu</h1>
      <p className="menu-text">
        Explore from the diverse menu we got. Here are among some of our best
        delicious and healthy meals.
      </p>
      <div className="menu-nav row justify-content-center mb-4">
        <button
          className={selectedCategory === "All" ? "active btn col" : "btn col"}
          onClick={() => {
            handleCategory("All");
          }}
        >
          All
        </button>
        {Meals.map((category, index) => (
          <div
            className={
              selectedCategory === category
                ? "menu-item-active col"
                : "menu-item col"
            }
            key={index}
            onClick={() => {
              handleCategory(category.name);
            }}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <div className="menu-list row">
        {filteredMeals.map((meal) => (
          <div
            key={meal.id}
            className="food-item col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <h5>
              <i>{meal.name}</i>
            </h5>
            <img
              src={meal.imageUrl}
              alt={meal.name}
              className="img-fluid food-image"
            />
            <p>{meal.description}</p>
            <div className="price-order d-flex align-items-center">
              <span className="price">{meal.price} $</span>
              <button className="btn ms-auto">
                <BsCart4 /> Order Now
              </button>
            </div>
            <p className={meal.available ? "available" : "unavailable"}>
              {meal.available ? "Available" : "Unavailable"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
