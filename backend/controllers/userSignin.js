const db = require("../db");
const bcrypt = require("bcrypt");

// Handle signup
app.post("/api/signup", async (req, res) => {
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
