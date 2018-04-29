
var mongoose=require("mongoose");

var dataset4Schema=new mongoose.Schema({
    Month:String,
    numericMonth:Number,
    Year:Number,
    gasPrices:Number,
});

module.exports=mongoose.model("dataset4",dataset4Schema);