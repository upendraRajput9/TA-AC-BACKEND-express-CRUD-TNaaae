var express = require("express");
var path = require("path")
var mongoose = require("mongoose")
var logger = require("morgan");
var cookieparase = require("cookie-parser");
var userRouter = require("./routes/routes.js")
var app = express();



//middlewares
app.set("view engine",'ejs');
app.set('views',path.join(__dirname,"views"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(logger());
app.use(cookieparase());
app.use("/user",userRouter);


//handle error
app.use((req,res,next)=>{
    res.status(404).send("page not found")
});

app.listen(3000,()=>{
    console.log("server listening on port 3k")
});