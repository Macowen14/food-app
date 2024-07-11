const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const signupRoute = require("./controllers/userSignin");
const loginRoute = require("./controllers/userLogin");
const db = require("./db");

const app = express();

// Middleware
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

// Routes
app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);

const createTables = async () => {
  try {
    const connection = await db.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        phone VARCHAR(15) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
    console.log("User table created successfully");
    connection.release();
    // Start the server
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (err) {
    console.error("Error creating user table:", err);
  }
};
createTables();
