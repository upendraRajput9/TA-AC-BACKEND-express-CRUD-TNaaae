var express = require('express')
var mongoose = require('mongoose')
var path = require('path')
const students = require('../models/students')
var Student = require('../models/students')
var router = express.Router()


mongoose.connect('mongodb://localhost/routes', (err) => {
  console.log(err ? err : 'Connection true')
})

router.use(express.json())
router.use(express.urlencoded({ extended: false }))
//student routes
router.use(express.static(path.join(__dirname, '../public')));


// router
router.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

router.post('/', (req, res) => {
  Student.create(req.body, (err, student) => {
    res.json(student)
  })
});

router.get("/:id",(req,res)=>{
  let id = req.params.id
  Student.findById(id,(err,student)=>{
    res.render("students", {
      student: { name: "rahul", email: "rahul@altcampus.io" },
    });
  })
})

module.exports = router
