var express = require("express");
var logger = require("morgan");
var userRouter = require("./routes/user")
var path = require("path");
var mongoose = require("mongoose");
var app = express();

//mongoose connection
mongoose.connect("mongodb://localhost/simple",(err)=>{
    console.log(err ? err : "Connection true")
})

//setup view engine
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine',"ejs");
app.set("views",path.join(__dirname,"views"))


//routes
app.use("/users",userRouter)

//Error handler

app.use((req,res,next)=>{
    res.status(404).send("Page not found")
})

app.use((err,req,res,next)=>{
    res.status(500).send(err)
})

app.listen(3000,()=>{
    console.log("server listening on port 3k")
})