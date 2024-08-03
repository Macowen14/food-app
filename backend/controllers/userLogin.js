const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../db");

// Handle login
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res
      .status(400)
      .send({ message: "Email and password are required." });
  }

  try {
    const connection = await db.getConnection();

    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        connection.release();

        if (err) {
          return res.status(500).send({ message: "Database error occurred." });
        }

        if (results.length === 0) {
          return res
            .status(401)
            .send({ message: "Invalid email or password." });
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return res
            .status(401)
            .send({ message: "Invalid email or password." });
        }

        // Create session or token here
        res.status(200).send({ message: "Login successful" });
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
