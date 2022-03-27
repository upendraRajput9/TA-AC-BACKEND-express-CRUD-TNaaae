var express = require("express");
var User = require("../models/userSchema")
var router = express.Router();
var mongoose = require("mongoose")


mongoose.connect("mongodb://localhost/routes",(err)=>{
    console.log(err ? err : "Connection true")
})
//router
router.get("/new",(req,res)=>{
    res.render("userform")
})

router.post("/",(req,res)=>{
    User.create(req.body,(err,user)=>{
        if(err) return err;
        res.json(user)
    })
})

router.get("/",(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return err;
        res.render("users",{list:[users]})
    })
})

router.get("/:id",(req,res)=>{
    let id = req.params.id
    User.findById(id,(err,user)=>{
        if(err) return err;
        res.render("singleUser",{user:user})
    })
})
module.exports= router