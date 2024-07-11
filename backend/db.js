const mysql = require("mysql");

// Create a MySQL connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "food_app",
});

// Export the connection pool for use in other modules

module.exports = db;
