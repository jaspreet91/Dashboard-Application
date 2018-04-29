var mongoose=require("mongoose");


var dataset3Schema=new mongoose.Schema({  
        commodity: String,
        Currency: String,
        Unit:String,
        Year:Number,
        Value: Number,
});

module.exports=mongoose.model("dataset3",dataset3Schema);