
var dao = require('../config/dao.js');

var burger = {
  all: function(callback) {
    dao.selectAll("burgers", (res)=> {
      callback(res);
    });
  },
  create: function (callback)
   {
    //  What is this?
    let insertObj = req.body;
    dao.insertOne("burgers", insertObj, (res)=> {
        callback(res)
    });
  },
  update: function (callback) {
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
