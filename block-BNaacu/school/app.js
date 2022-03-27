var express = require("express");
var path = require("path");
const students = require("./models/students");
var Student = require('./models/students')
var app = express();

//setup view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))


//middleware
app.use(express.json())
app.use('/students',require("./routes/index"))



app.get("/index",(req,res)=>{
    res.render("index.ejs")
})
app.get('/students', (req, res) => {
    res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
  });

  

//listener
app.listen(3000,()=>{
    console.log("server listening on port 3k")
})