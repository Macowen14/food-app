import { useState } from "react";
import "./foodDisplay.scss";
import { BsCart4 } from "react-icons/bs";
import Meals from "../../data/Meals";
import { useCart } from "react-use-cart";

function FoodDisplay() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  const { addItem } = useCart();
  const filteredMeals =
    selectedCategory === "All"
      ? Meals.flatMap((category) => category.items)
      : Meals.find((category) => category.name === selectedCategory)?.items ||
        [];

  return (
    <>
      <div className="menu-nav row justify-content-center mb-4">
        <button
          className={
            selectedCategory === "All"
              ? "active btn  menu-all "
              : "btn  menu-all"
          }
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
                ? "menu-item-active col "
                : "menu-item col "
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
            className="food-item col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
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
              <button
                className={
                  meal.available ? "btn ms-auto" : "btn ms-auto disabled"
                }
                onClick={() => {
                  addItem(meal);
                }}
              >
                <BsCart4 /> Order Now
              </button>
            </div>
            <p className={meal.available ? "available" : "unavailable"}>
              {meal.available ? "Available" : "Unavailable"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodDisplay;
