const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const db = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 900000 },
  })
);

// Create tables if they don't exist
db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`);

// Handle login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
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
      res.status(200).send({ message: "Login successful" });
    }
  );
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
