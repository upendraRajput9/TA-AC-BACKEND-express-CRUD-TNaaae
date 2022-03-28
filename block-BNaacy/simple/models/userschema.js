var mongoose= require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:{type:String,required:true},
    age:Number,
    email:{type:String,lowercase:true}
})

module.exports = mongoose.model("User",userSchema);