const mongoose=require("mongoose");

const schema=mongoose.Schema({
    email:String,
    password:String
});

module.exports=mongoose.model("Admin",schema,'admins');