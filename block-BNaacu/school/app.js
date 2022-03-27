var express = require("express");
var path = require("path");
var Student = require('./models/students')
var app = express();

//setup view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.json())
app.use('/students',require("./routes/index"));
//listener
app.listen(3000,()=>{
    console.log("server listening on port 3k")
})