var express =  require("express");
var User = require("../models/userSchema")
var router = express.Router();

//router
router.get("/new",(req,res)=>{
    res.render("userform")
})

router.post("/",(req,res)=>{
User.create(req.body,(err,user)=>{
    console.log(err,user)
    if(err) return res.redirect("/users/new")
    res.redirect("/users/")
})
})

router.get("/",(req,res)=>{
    User.find({},(err,users)=>{
        res.render("users",{list:users})
    })
})

router.get("/:id",(req,res)=>{
    let id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return res.redirect("/users/")
        res.render("userdetails",{user:user})
    })
});

router.get("/:id/edit",(req,res)=>{
    let id = req.params.id;
    User.findById(id,(err,user)=>{
        if(err) return res.redirect("/users/")
        res.render("updateuser",{user:user})
    })
})

router.post("/:id",(req,res)=>{
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,user)=>{
        if(err) return res.redirect("/users/")
        res.redirect("/users/" + id)
    })
})
router.get("/:id/delete",(req,res)=>{
    let id = req.params.id;
    User.findByIdAndDelete(id, (err)=>{
        if(err) return next(err);
        res.redirect("/users/")
    })
})



module.exports=router;