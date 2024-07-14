const db = require("../db");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

// Handle login
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const connection = await db.getConnection();

  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (
        results.length === 0 ||
        !(await bcrypt.compare(password, results[0].password))
      ) {
        return res.status(400).send({ message: "Invalid email or password" });
      }

      req.session.user = results[0];
      console.log(res.session);
      console.log(res.sessionId);
      res.status(200).send({ message: "Login successful" });
    }
  );
  connection.release();
});

module.exports = router;
