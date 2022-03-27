var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    name:String,
    email:{type:String,lowercase:true}
})

module.exports= mongoose.model("Student",studentSchema);