var express = require("express");
var User = require("../models/userSchema")
var router = express.Router();
var path = require("path")

//routes
router.post("/",(req,res,next)=>{
User.create(req.body,(err,user)=>{
if(err) return next(err);
res.redirect("/users")
})
});

router.get("/",(req,res,next)=>{
User.find({},(err,users)=>{
    if(err) return next(err);
    res.render("userlist",{list:users})
})
});

router.get("/:id",(req,res,next)=>{
let id = req.params.id;
User.findById(id,(err,user)=>{
    if(err) return next(err);
    res.render("singleUser",{user:user})
})
});

router.put("/:id",(req,res)=>{
    let id = req.params.id;
User.findByIdAndUpdate(id,req.body,(err)=>{
    if(err) return next(err);
    res.redirect("/users/"+id)
})

})
router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id,(err)=>{
        if(err) return next(err);
        res.render("userlist")
    })
})

module.exports = router;