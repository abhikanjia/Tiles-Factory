const mongoose=require("mongoose");

const schema=mongoose.Schema({
    tname:String,
    timage:String,
    tdescription:String,
    tquantityperbox:String,
    tpriceperbox:String,
    tsize:String,
    tcatagory:String,
});

module.exports=mongoose.model("Product",schema,'products');