var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


// Routes needed
// Get route to grab all burgers from table
router.get("/", (req, res)=>{
  burger.all((data)=> {
    var burgersDBInfo = {
      burgers: data
      };
      res.render ("index", burgersDBInfo);
  });
});
// Post route to create a new burger
router.post("/", (req, res)=> {
    burger.create(req.body, ()=>{
      res.redirect("/");
    });
});
router.put("/:id", (req, res)=> {
    let conditionObj = {id: req.params.id};
    burger.update({devour: req.body.devour}, conditionObj, ()=>{
      res.redirect("/");
    });
});
router.delete("/:id", (req, res)=> {
  burger.delete(()=>{
    res.redirect("/");
  });
});

module.exports = router;
