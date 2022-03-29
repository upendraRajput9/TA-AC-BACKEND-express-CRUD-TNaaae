var express = require("express");
var User = require('../models/userSchema');

var router = express.Router();

//router
router.get("/new",(req,res)=>{
    res.render("userForm")
})


router.get("/",(req,res)=>{
    User.find({},(err,users)=>{
        res.render("userList",{list:users})
    })
    
})

router.get("/:id",(req,res,next)=>{
    let id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render("singleUser",{user:user})
    })
});

router.post("/",(req,res,next)=>{
    User.create(req.body,(err,user)=>{
        if(err) return next(err)
        res.redirect("users/"+user._id)
    })
});

router.get("/:id/edit",(req,res,next)=>{
    let id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return next(err);
        res.render("updatedForm",{user:user})
    })
})

router.post("/:id",(req,res,next)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,user)=>{
        console.log(user)
        if(err) return next(err)
        res.redirect(id)
    })
});

router.get("/:id/delete",(req,res,next)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id,(err)=>{
        if(err) return next(err);
        res.redirect("/users")
    })
});

module.exports = router