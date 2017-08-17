
var dao = require('../config/dao.js');

var burger = {
  all: function(callback) {
    dao.selectAll("burgers", (res)=> {
      callback(res);
    });
  },
  create: function (req, callback)
   {
    dao.insertOne("burgers", req, (res)=> {
        callback(res)
    });
  },
  update: function (objColVals, condition, callback) {
    dao.updateOne("burgers", objColVals, condition, (res)=> {
        callback(res)
    });
  },
  delete: function (callback) {
      dao.deleteOne("burgers", conditionObj, (res)=> {
          callback(res)
      });
  }
};
module.exports = burger;
