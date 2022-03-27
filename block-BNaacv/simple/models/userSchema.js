var mongoose = require("mongoose");

var Schema= mongoose.Schema;

var userSchema = new Schema({
    name:String,
    age:Number,
    email:{type:String,lowercase:true}
});

module.exports = mongoose.model('User',userSchema);