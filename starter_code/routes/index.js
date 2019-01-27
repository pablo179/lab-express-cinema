const express = require('express');
const router  = express.Router();
const all=require('../bin/seeds')
const Movie= require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/insert',(req,res,next)=>{
  all.forEach((a)=>{
    let newins =new Movie(a)
    newins.save();
  })
  res.render('index')
})
router.get('/movies',(req,res)=>{
  Movie.find().then(movi=>res.render('list',{movi}))
})
router.get('./movies/:id',(req,res)=>{
  console.log("el id es: "+req.param.id)
  res.response(req.param.id)
})
module.exports = router;
