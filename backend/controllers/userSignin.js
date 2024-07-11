const db = require("../db");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

// Handle signup
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await db.getConnection();

    connection.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      (err, result) => {
        connection.release();

        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).send({
              message: "Email already exists. Please use a different email.",
            });
          }
          return res.status(500).send({ message: "Database error occurred." });
        }

        res.status(200).send({ message: "User registered successfully" });
      }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    res
      .status(500)
      .send({ message: "An error occurred. Please try again later." });
  }
});

module.exports = router;
