var connection = require('./connection.js');
var dao = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(table, insertObj, callback) {
    var queryString = "INSERT INTO " + table + " SET ?";
    connection.query(queryString, [insertObj], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  updateOne: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table + " SET ? WHERE ?";
    connection.query(queryString, [objColVals, condition], function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  deleteOne: function(table, conditionObj, callback) {
    var queryString = "DELETE FROM " + table + " WHERE ?";
    connection.query(queryString, [conditionObj], function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
};

module.exports = dao;
