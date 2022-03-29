var express = require("express");
var logger = require("morgan");
var userRouter = require("./routes/user")
var mongoose = require("mongoose");
var path = require("path");

var app = express();

//mongo connection
mongoose.connect("mongodb://localhost/user-diary-3",(err)=>{
    console.log(err ? err : "Connection true")
})

//setup view engine
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger());
app.use(express.static(path.join(__dirname, 'public/stylesheet')))
//routes
app.use("/users",userRouter)

//handle error

app.use((req,res,next)=>{
    res.status(404).send("Page not found")
})

app.use((err,req,res,next)=>{
    res.status(500).send(err)
})

app.listen(3000,()=>{
    console.log("server listening on port 3k")
})