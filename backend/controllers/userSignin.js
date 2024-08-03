const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../db");

// Handle signup
router.post("/", async (req, res) => {
  console.log("Signup request received:", req.body);

  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    console.log("Error: Missing required fields.");
    return res.status(400).send({ message: "All fields are required." });
  }

  let connection;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    connection = await db.getConnection();
    console.log("Database connection acquired");

    connection.query(
      "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, phone],
      (err, result) => {
        console.log("Inside query callback");

        if (err) {
          console.error("Database error:", err);
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).send({
              message: "Email already exists. Please use a different email.",
            });
          }
          return res.status(500).send({ message: "Database error occurred." });
        }

        console.log("Query result:", result);
        console.log("User registered successfully.");
        res.status(200).send({ message: "User registered successfully" });
      }
    );
  } catch (error) {
    console.error("Error during signup:", error);
    res
      .status(500)
      .send({ message: "An error occurred. Please try again later." });
  } finally {
    if (connection) {
      console.log("Releasing database connection");
      connection.release(); // Ensure this gets executed
    }
  }
});

module.exports = router;
