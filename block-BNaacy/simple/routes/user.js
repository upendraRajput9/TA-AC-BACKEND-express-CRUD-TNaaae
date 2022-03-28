var express = require("express");
var User = require("../models/userschema")
var router = express.Router();

//router
router.get("/new",(req,res)=>{
    res.render("userform")
})

router.post("/",(req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err) return res.redirect("users/new")
        res.json(user)
    })
})

router.get("/",(req,res)=>{
    User.find({},(err,users)=>{
    res.render("users",{list:users})

})
})



module.exports= router