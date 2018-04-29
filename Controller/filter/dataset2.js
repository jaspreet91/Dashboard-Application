var express = require("express");
var app=express.Router();
var dataset2=require("../../models/schema/dataset2Schema");

// this is the start of dataset 2 model.find().sort({ name: 'criteria' }).exec(function(err, model) { ... });

app.get("/dataset2",function(req, res) {
    dataset2.find().sort({Community_Area_Number : 'asc'}).exec(function(err,allData){
        if(err){
            console.log(err);
        }else{
            res.render("show/dataset2show",{data:allData});
        }
    });
});
// this is dataset 2 results page
app.get("/searchResult2",function(req, res) {
  var columnSelection=req.query.columnSelection;
  var userInput=req.query.userInput;
   var query = {};
   query[columnSelection]=userInput;
    dataset2.find(query,function(err, allData) {
        if(err){
            console.log(err);
        }
            else {
          res.render("results/searchResult2",{data:allData,chartType:req.query.chartType,userColumn:columnSelection});
            }
        
    });
});


app.get("/distinctdataset2",function(req, res) {
    var p=req.query.distinctColumn ;
    dataset2.find().distinct((''+p),function(err,allData){
        
        if(err)
        {
            console.log(err);
        }
    else{
        allData.sort();
    res.render("distinct/distinctdataset2",{data:allData,x:p});      
         }
    });
});


app.get("/distinctdataset2show",function(req,res){
    var userColumn=req.query.userColumn;
    var chartType=req.query.chartType;
 dataset2.find({$or :[{Community_Area_Number:req.query.Community_Area_Number},{COMMUNITY_AREA_NAME:req.query.COMMUNITY_AREA_NAME},{HARDSHIP_INDEX:req.query.HARDSHIP_INDEX},{PERCENT_OF_HOUSING_CROWDED:req.query.PERCENT_OF_HOUSING_CROWDED},
 {PERCENT_HOUSEHOLDS_BELOW_POVERTY:req.query.PERCENT_HOUSEHOLDS_BELOW_POVERTY},{PERCENT_AGED_16_UNEMPLOYED:req.query.PERCENT_AGED_16_UNEMPLOYED},
 {PERCENT_AGED_25_WITHOUT_HIGH_SCHOOL_DIPLOMA:req.query.PERCENT_AGED_25_WITHOUT_HIGH_SCHOOL_DIPLOMA},
 {PERCENT_AGED_UNDER_18_OR_OVER_64:req.query.PERCENT_AGED_UNDER_18_OR_OVER_64},{PER_CAPITA_INCOME:req.query.PER_CAPITA_INCOME}]}).sort({Community_Area_Number : 'asc'}).exec(function(err,allData){
                
                 if(err)
                        {   
                            console.log(err);
                        }
                    else{
                        //  console.log(allData);
                            res.render("results/searchResult2",{chartType:chartType,data:allData,userColumn:userColumn});
                    }
                
                 } );
   
                
});


// this is dataset 2 less than or greater than section

app.get("/lessorgrtrcountdataset2",function(req, res) {
   
    if (req.query.gt==="" && req.query.lt==="")
     {
         //res.send("please enter atleast less than or greater than value");
        res.render("results/searchResult2",{data:[],chartType:req.query.chartType,userColumn:userColumn});
     }
    var chartType= req.query.chartType;
    var userColumn=req.query.columnType;
    //var value = req.query.lt;
    var query = {};
   
        if(req.query.gt==="" && req.query.lt !==""){
             query[userColumn] = {'$lt': req.query.lt };
            dataset2.find(query).sort({Community_Area_Number : 'asc'}).exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {    // console.log(alldata);
          res.render("results/searchResult2",{data:alldata,chartType:chartType,userColumn:userColumn});
      }
    });
        }
        else if(req.query.gt !=="" && req.query.lt ===""){
            query[userColumn] = {'$gt': req.query.gt};
            dataset2.find(query).sort({Community_Area_Number : 'asc'}).exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult2",{data:alldata,chartType:chartType,userColumn:userColumn});
      }
    });
        }
        else{
            query[userColumn] = {'$gt': req.query.gt , '$lt': req.query.lt };
            dataset2.find(query).sort({Community_Area_Number : 'asc'}).exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult2",{data:alldata,chartType:chartType,userColumn:userColumn});
      }
    });
        }
});

module.exports=app;