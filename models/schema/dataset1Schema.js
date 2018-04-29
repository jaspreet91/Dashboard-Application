var mongoose=require("mongoose");

var dataset1Schema= new mongoose.Schema(
    {
        NAME : String,
        JOB_TITLE : String,
        DEPARTMENT_CODE : Number,
        ANNUAL_SALARY : Number,
});

module.exports=mongoose.model("dataset1",dataset1Schema);