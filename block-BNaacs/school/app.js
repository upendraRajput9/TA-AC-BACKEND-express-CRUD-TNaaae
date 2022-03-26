var express = require("express");
var path = require("path")
var app = express();
app


//middelware
app.set('veiw engine', "ejs");
app.set("views", path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.send("WELCOME");
})

app.get("/index",(req,res)=>{
    res.render("index.ejs")
})

app.listen(3000,()=>{
    console.log("server listening on port 3k")
})