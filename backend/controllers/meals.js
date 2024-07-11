const db = require("../db");
const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const [categories] = await db.query("SELECT * FROM categories");
    const [meals] = await db.query("SELECT * FROM items");

    const data = categories.map((category) => ({
      id: category.id,
      name: category.name,
      image: category.image,
      items: meals.filter((item) => item.category_id === category.id),
    }));

    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = route;
