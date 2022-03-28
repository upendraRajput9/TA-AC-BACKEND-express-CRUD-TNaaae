var express = require("express");
var logger = require("morgan");
var cookieparser = require("cookie-parser");
var mongoose = require("mongoose");
var path = require("path")
var userRoutes= require("./routes/user")

var app = express();

//mongoose connection
mongoose.connect("mongodb://localhost/simple",(err)=>{
    console.log(err ? err : "Connection true")
})

//setup views engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"))

//middleware
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/users",userRoutes)


app.use((req,res,next)=>{
    res.status(404).send("Page not found")
})
app.use((err,req,res,next)=>{
    res.status(500).send(err)
})

app.listen(3000,()=>{
    console.log("server listening on port 3k")
})