const mysql = require("mysql2/promise");

// Create a MySQL connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "food_app_db",
  port: 3307,
});

// Export the connection pool for use in other modules

module.exports = db;
