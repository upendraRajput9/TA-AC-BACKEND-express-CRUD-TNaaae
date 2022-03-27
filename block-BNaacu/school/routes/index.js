var express = require('express')
var mongoose = require('mongoose')
var path = require('path')
var Student = require('../models/students')
var router = express.Router()


mongoose.connect('mongodb://localhost/routes', (err) => {
  console.log(err ? err : 'Connection true')
})

router.use(express.json())
router.use(express.urlencoded({ extended: false }))
//student routes
router.use(express.static(path.join("../",__dirname, 'public')));


// router
router.get("/new",(req,res)=>{
  res.render("studentform")
})

router.get('/', (req, res) => {
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});


router.post('/', (req, res) => {
  Student.create(req.body, (err, student) => {
    res.json(student)
  })
});

router.get("/:id",(req,res)=>{
  let id = req.params.id
  Student.findById(id,(err,student)=>{
    res.render("studentDetail", {
      student: student,
    });
  })
})

module.exports = router
