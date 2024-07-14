import React, { useState, useEffect, useMemo } from "react";
import "./foodDisplay.scss";
import { fetchMealsData } from "../../data/Meals";
import { useCart } from "react-use-cart";
import FoodItem from "../foodItem/FoodItem";

function FoodDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addItem } = useCart();

  useEffect(() => {
    const getData = async () => {
      try {
        const mealsData = await fetchMealsData();
        setData(mealsData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredMeals = useMemo(
    () =>
      selectedCategory === "All"
        ? data.flatMap((category) => category.items)
        : data.find((category) => category.name === selectedCategory)?.items ||
          [],
    [selectedCategory, data]
  );

  if (loading) return <p className="text-info">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <>
      <div className="menu-nav row justify-content-center mb-4">
        <button
          className={
            selectedCategory === "All" ? "active btn menu-all" : "btn menu-all"
          }
          onClick={() => handleCategory("All")}
        >
          All
        </button>
        {data.map((category, index) => (
          <div
            className={
              selectedCategory === category.name
                ? "menu-item-active col"
                : "menu-item col"
            }
            key={index}
            onClick={() => handleCategory(category.name)}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <div className="menu-list row">
        {filteredMeals.map((meal) => (
          <FoodItem key={meal.id} meal={meal} addItem={addItem} />
        ))}
      </div>
    </>
  );
}

export default FoodDisplay;
