const db = require("../db");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

// Handle signup
router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send({ message: "User registered successfully" });
    }
  );
});

module.exports = router;
