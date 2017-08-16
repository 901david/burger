// Set up MySQL connection.
var mysql = require("mysql");
var key = require('../key.js');
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: process.env.KEY || key,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our DAO to use.
module.exports = connection;