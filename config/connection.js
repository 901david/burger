// Set up MySQL connection.
var mysql = require("mysql");
var key = require('../key.js');
var connection;
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
   port: 3306,
   host: "localhost",
   user: "root",
   password: "4984",
   database: "burgers_db"
 });
}
// ()=> {
//           if (process.env.KEY) {
//             return process.env.KEY;
//           }
//           else {
//             return key
//           }
//         },

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
