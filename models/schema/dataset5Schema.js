
var mongoose=require("mongoose");


var dataset5schema=new mongoose.Schema({
    State : String ,
    International_Students:Number ,
    USDollars: Number ,
    Jobs: Number,
    lat:Number,
    long:Number,
});

module.exports=mongoose.model("dataset5",dataset5schema);