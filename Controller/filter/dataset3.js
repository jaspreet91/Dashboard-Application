var express = require("express");
var app=express.Router();
var dataset3=require("../../models/schema/dataset3Schema");



// THIS IS THE DATASET3 : GOLD & AL 

app.get("/dataset3",function(req, res) {
     dataset3.find().sort({Year : 'asc',}).exec(function(err,alldata){
        if(err){
            console.log(err);
        }else{
            res.render("show/dataset3show",{data:alldata});
        }
    });
});

app.get("/searchResult3",function(req,res) {
    var commodityType=req.query.commodityType;
    var year=req.query.Year;
    var commodityPrice=req.query.commodityPrice;
   
    var chartType=req.query.chartType;
    
            if(commodityType !== "" && year === "" && commodityPrice===""){
                    dataset3.find({commodity:req.query.commodityType},
                    function(err,allData){
                    if(err){
                        console.log(err);
                    }else{
                        // console.log(allData);
                            res.render("results/searchResult3",{data:allData,chartType:chartType});
                    }
                    });  
            } 
            
            else if ( commodityType !== "" && year !== "" && commodityPrice===""){
                 dataset3.find().sort({Year : 'asc',}).exec(function(err,alldata){
                    if(err){
                        console.log(err);
                    }else{
                          dataset3.find({Year:req.query.Year},function(err,allData){
                       if(err){
                             console.log(err);
                         }else{ // console.log(allData);
                                 res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
                         }
                           });
                    }
                });
                 
             }  
             
             else if ( commodityType !== "" && year === "" && commodityPrice !=="")
             {
                dataset3.find().sort({Year : 'asc',}).exec(function(err,alldata){
                    if(err){
                        console.log(err);
                    }else{
                          dataset3.find({Value:req.query.commodityPrice},function(err,allData){
                       if(err){
                             console.log(err);
                         }else{ // console.log(allData);
                                 res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
                         }
                           });
                    }
                }); 
             } 
             else if (req.query.distinctButton==="distinct")
             {
                 
                dataset3.find().sort({Year : 'asc',}).exec(function(err,alldata){
                    if(err){
                        console.log(err);
                    }else{
                        dataset3.find({ $or:[{Value:req.query.Value},{Year:req.query.Year}]},function(err,allData){
                        if(err)
                        {
                            console.log(err);
                        }
                    else{
                            
                            res.render("results/searchResult3",{chartType:chartType,data:allData,entireData:alldata});
                    }
                    });
                    }
                }); 
             
                 
                 
             } 
            else
             {
                 {
                dataset3.find().sort({Year : 'asc',}).exec(function(err,alldata){
                    if(err){
                        console.log(err);
                    }else{
                          dataset3.find({$and:[{commodity:req.query.commodityType},{Year:req.query.Year},{Value:req.query.commodityPrice}]},
                 function(err,allData){
              if(err){
                     console.log(err);
                 }else{
                         res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});      
                 }
                  });
                    }
                }); 
             } 
                      
             }
});

app.get("/distinctdataset3",function(req, res) {
    var p=req.query.distinctColumn ;
    dataset3.find().distinct((''+p),function(err,allData){
        
        if(err)
        {
            console.log(err);
        }
    else{
        allData.sort();
    res.render("distinct/distinctdataset3",{data:allData,x:p});      
    }
    });
});

app.get("/lessorgrtrcountdataset3",function(req, res) {
    var chartType= req.query.chartType;
    
    dataset3.find().sort({Year : 'asc',}).exec(function(err,alldata){
                    if(err){
                        console.log(err);
                    }else{
                          
    if(req.query.columnType==="Year"){
        if(req.query.gt==="" && req.query.lt !==""){
            dataset3.find({ Year : {'$lt': req.query.lt }},function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
      }
    });
        }else if(req.query.gt !=="" && req.query.lt ===""){
            dataset3.find({ Year : {'$gt': req.query.gt}},function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
      }
    });
        }
        else{
            dataset3.find({ Year : {'$gt': req.query.gt , '$lt': req.query.lt }},function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
         
      }
    });
        }
    }else{
        if(req.query.gt==="" && req.query.lt !==""){
            dataset3.find({ Value : {'$lt': req.query.lt }},function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
      }
    });
        }else if(req.query.gt !=="" && req.query.lt ===""){
            dataset3.find({ Value : {'$gt': req.query.gt}},function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
      }
    });
        }
        else{
            dataset3.find({ Value : {'$gt': req.query.gt , '$lt': req.query.lt }},function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult3",{entireData:alldata,data:allData,chartType:chartType});
         
      }
    });
        }
    }
                    }
                }); 
    
   
    
});



module.exports=app;