import React from "react";
import foodData from "./data/foods.json";

const FoodList = () => {
  return (
    <div>
      {foodData.categories.map((category) =>
        category.items.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price}
          </div>
        ))
      )}
    </div>
  );
};

export default FoodList;
