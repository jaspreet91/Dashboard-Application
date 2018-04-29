var express = require("express");
var app=express.Router();
var dataset5=require("../../models/schema/dataset5Schema");



// this is dataset 5

app.get("/dataset5",function(req, res) {
    dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        //console.log(alldata);
        res.render("show/dataset5show",{data:alldata});
    }
    });
});

app.get("/searchResult5",function(req, res) {

  var userInput1=req.query.column1;
  var userInput2=req.query.column2;
  var userInput3=req.query.column3;
    
    if(userInput1 ==="" && userInput2 ==="" && userInput3===""   ){
        var data=[];
        dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        //console.log(alldata);
        res.render("results/searchResult5",{data,entireData:alldata,chartType:req.query.chartType,userColumn:req.query.userColumn1});
    }
    });
        
    }     
        
   
   
   else if(userInput1 !=="" && userInput2==="" && userInput3===""   ){
        dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
    dataset5.find({International_Students:req.query.column1}).sort({State : 'asc'}).exec(function(err,allData){
            if(err){
            console.log(err);
        }
            else {
              var arrdata=Array.from(alldata);
          res.render("results/searchResult5",{arrdata,data:allData,entireData:alldata,chartType:req.query.chartType,userColumn:req.query.userColumn1});
            }
    });
      
    }
    });
} 

 else if(userInput1 ==="" && userInput2!=="" && userInput3===""   ){
       dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        dataset5.find({USDollars:req.query.column2}).sort({State : 'asc'}).exec(function(err,allData){
            if(err){
            console.log(err);
        }
            else {
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:req.query.chartType,userColumn:req.query.userColumn2});
            }
    });
    }
    });
}

 else if(userInput1 ==="" && userInput2==="" && userInput3 !==""   ){
       dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        dataset5.find({Jobs:req.query.column3}).sort({State : 'asc'}).exec(function(err,allData){
            if(err){
            console.log(err);
        }
            else {
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:req.query.chartType,userColumn:req.query.userColumn3});
            }
    });
    }
    });
}

if(userInput1 !=="" && userInput2 !=="" && userInput3===""   ){
       dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        dataset5.find({$or :[{International_Students:req.query.column1},{USDollars:req.query.column2}]})
        .sort({State : 'asc'}).exec(function(err,allData){
            if(err){
            console.log(err);
        }
            else {
               
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:req.query.chartType,userColumn:req.query.userColumn2});
            }
    });
    }
    });
}
  
else if(userInput1 !=="" && userInput2 ==="" && userInput3 !==""   ){
      dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        dataset5.find({$or :[{International_Students:req.query.column1},{Jobs:req.query.column3}]})
        .sort({State : 'asc'}).exec(function(err,allData){
            if(err){
            console.log(err);
        }
            else {
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:req.query.chartType,userColumn:req.query.userColumn1});
            }
    });
    }
    });
}
if(userInput1 ==="" && userInput2 !=="" && userInput3 !==""   ){
       dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        dataset5.find({$or :[{Jobs:req.query.column3},{USDollars:req.query.column2}]})
        .sort({State : 'asc'}).exec(function(err,allData){
            if(err){
            console.log(err);
        }
            else {
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:req.query.chartType,userColumn:req.query.userColumn2});
            }
    });
    }
    });
}
       
else if(userInput1 !=="" && userInput2 !=="" && userInput3 !==""   ){
       dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
        dataset5.find({$or :[{International_Students:req.query.column1},{USDollars:req.query.column2},{Jobs:req.query.column3}]})
        .sort({State : 'asc'}).exec(function(err,allData){
            if(err){
            console.log(err);
        }
            else {
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:req.query.chartType,userColumn:req.query.userColumn2});
            }
    });
    }
    });
}

});

app.get("/distinctdataset5",function(req, res) {
    var p=req.query.distinctColumn ;
    
    dataset5.find().distinct((''+p),function(err,allData){
        
        if(err)
        {
            console.log(err);
        }
    else{
        allData.sort(p);
    res.render("distinct/distinctdataset5",{data:allData,x:p});      
    }
    });
});

app.get("/distinctdataset5show",function(req,res){
    var userColumn=req.query.userColumn;
    var chartType=req.query.chartType;
    dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
    dataset5.find({$or :[{International_Students:req.query.International_Students},{USDollars:req.query.USDollars},{Jobs:req.query.Jobs}]})
    .sort({State : 'asc'}).exec(function(err,allData){
                
                 if(err)
                        {   
                            console.log(err);
                        }
                    else{
                        //  console.log(allData);
                            res.render("results/searchResult5",{entireData:alldata,chartType:chartType,data:allData,userColumn:userColumn});
                    }
                 });
    }
    });
});

app.get("/lessorgrtrcountdataset5",function(req, res) {
    var chartType= req.query.chartType;
    var userColumn=req.query.columnType;
    //var value = req.query.lt;
    var query = {};
         dataset5.find().sort({State : 'asc'}).exec(function(err,alldata){
    if(err){
        console.log(err);
    }else{
         if(req.query.gt==="" && req.query.lt !==""){
             query[userColumn] = {'$lt': req.query.lt };
            dataset5.find(query).sort({State : 'asc'}).exec(function(err,allData){
      if(err){
          console.log(err);
      }  else
      {    // console.log(alldata);
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:chartType,userColumn:userColumn});
      }
    });
        }
        else if(req.query.gt !=="" && req.query.lt ===""){
            query[userColumn] = {'$gt': req.query.gt};
            dataset5.find(query).sort({State : 'asc'}).exec(function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:chartType,userColumn:userColumn});
      }
    });
        }
        else{
            query[userColumn] = {'$gt': req.query.gt , '$lt': req.query.lt };
            dataset5.find(query).sort({State : 'asc'}).exec(function(err,allData){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult5",{entireData:alldata,data:allData,chartType:chartType,userColumn:userColumn});
      }
    });
        }
    }
    });
       
});

module.exports=app;