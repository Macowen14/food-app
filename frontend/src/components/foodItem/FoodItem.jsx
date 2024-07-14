import "../foodDisplay/foodDisplay.scss";
import React from "react";
import { BsCart4 } from "react-icons/bs";

const FoodItem = React.memo(({ meal, addItem }) => {
  return (
    <div className="food-item col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
      <h5>
        <i>{meal.name}</i>
      </h5>
      <img
        src={meal.imageUrl}
        alt={meal.name}
        loading="lazy"
        className="img-fluid food-image"
      />
      <p>{meal.description}</p>
      <div className="price-order d-flex align-items-center">
        <span className="price">{meal.price} $</span>
        <button
          className={meal.available ? "btn ms-auto" : "btn ms-auto disabled"}
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
  );
});

export default FoodItem;
