const mysql = require("mysql2");
// Create a connection to the database
// dotenv
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })


const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.dbUSER,
  password: process.env.PASSWORD,
  database: process.env.DB
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;
