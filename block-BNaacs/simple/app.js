var express = require("express");
var path = require("path");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/simple",(err)=>{
    console.log(err ? err: "Connection true")
})
var app = express();


app.use(express.json())
app.use((req,res,next)=>{
    res.locals.school = "Christ Convent School"
    next()
})
// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


//routes
app.get("/",(req,res)=>{
    res.send('welcome')
})

app.get("/index",(req,res)=>{
    res.render('index.ejs')
})

app.listen(4000,()=>{
    console.log("server listening on port")
})