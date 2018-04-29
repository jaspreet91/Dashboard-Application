var express = require("express");
var app=express.Router();
var dataset1=require("../../models/schema/dataset1Schema");


app.get("/dataset1",function(req,res){
    
    dataset1.find().sort({DEPARTMENT_CODE : 'asc'}).exec(function(err,allData){
        if(err)
        {
            console.log(err);
        }
    else{
    res.render("show/dataset1show",{data:allData});      
    }
    });
});


app.get("/searchResult1",function(req,res) {
    var salary=req.query.salary;
    var dept=req.query.dept;
    var jobTitle=req.query.jobTitle;
     var chartType=req.query.chartType;

            if(  salary !== "" && jobTitle !== "" && dept===""){
                    dataset1.find({ $and :[{ANNUAL_SALARY:""+salary},{JOB_TITLE:""+jobTitle}]},
                    function(err,allData){
                    if(err){
                        console.log(err);
                    }else{
                            res.render("results/searchResult1",{data:allData,chartType:chartType});
                    }
                    });  
            } 
            
            else if(  salary !== "" &&  dept!== "" && jobTitle===""){
                dataset1.find({ $and :[{ANNUAL_SALARY:""+salary},{DEPARTMENT_CODE:""+dept}]},
                function(err,allData){
                if(err){
                    console.log(err);
                }else{
                        res.render("results/searchResult1",{data:allData,chartType:chartType});
                }
                  });  
            } 
            
            else if(  jobTitle !== "" &&  dept!== "" && salary===""){
                dataset1.find({ $and :[{JOB_TITLE:""+jobTitle},{DEPARTMENT_CODE:""+dept}]},
                function(err,allData){
                if(err){
                    console.log(err);
                }else{
                        res.render("results/searchResult1",{data:allData,chartType:chartType});
                }
                 });  
            } 
            
           else if(dept === "" || salary === "" || jobTitle === ""){
            dataset1.find({ $or :[{ANNUAL_SALARY:""+salary},{DEPARTMENT_CODE:""+dept},{JOB_TITLE:""+jobTitle}]},
            function(err,allData){
            if(err){
                console.log(err);
            }else{
                    res.render("results/searchResult1",{data:allData,chartType:chartType});
            }
        });  
            }    
          
            else
            {
                dataset1.find({$and:[{ANNUAL_SALARY:""+salary},{DEPARTMENT_CODE:""+dept},{JOB_TITLE:""+jobTitle}]},
                function(err,allData){
                if(err){
                    console.log(err);
                }else{
                        res.render("results/searchResult1",{data:allData,chartType:chartType});      
                }
                 });     
            }
});


app.get("/distinctdataset1",function(req, res) {
    var p=req.query.distinctColumn ;
    dataset1.find().distinct((''+p),function(err,allData){
        
        if(err)
        {
            console.log(err);
        }
    else{
    res.render("distinct/distinctdataset1",{data:allData,x:p});      
    }
    });
});

app.get("/distinctdataset1show",function(req, res) {
    var chartType=req.query.chartType;
    dataset1.find({ $or:[{ANNUAL_SALARY:req.query.ANNUAL_SALARY},{DEPARTMENT_CODE:req.query.DEPARTMENT_CODE},{JOB_TITLE:req.query.JOB_TITLE}]},function(err,allData){
        
        if(err)
        {
            console.log(err);
        }
    else{
            
            res.render("results/searchResult1",{chartType:chartType,data:allData,});
        
       
    }
    });
});

app.get("/lessorgrtrcount",function(req, res) {
    var chartType= req.query.chartType;
    
    if(req.query.columnType==="DEPARTMENT_CODE"){
        if(req.query.gt==="" && req.query.lt !==""){
            dataset1.find({ DEPARTMENT_CODE : {'$lt': req.query.lt }},function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult1",{data:alldata,chartType:chartType});
      }
    });
        }else if(req.query.gt !=="" && req.query.lt ===""){
            dataset1.find({ DEPARTMENT_CODE : {'$gt': req.query.gt}},function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult1",{data:alldata,chartType:chartType});
      }
    });
        }
        else{
            dataset1.find({ DEPARTMENT_CODE : {'$gt': req.query.gt , '$lt': req.query.lt }},function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult1",{data:alldata,chartType:chartType});
         
      }
    });
        }
    }else{
        if(req.query.gt==="" && req.query.lt !==""){
            dataset1.find({ ANNUAL_SALARY : {'$lt': req.query.lt }},function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult1",{data:alldata,chartType:chartType});
      }
    });
        }else if(req.query.gt !=="" && req.query.lt ===""){
            dataset1.find({ ANNUAL_SALARY : {'$gt': req.query.gt}},function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult1",{data:alldata,chartType:chartType});
      }
    });
        }
        else{
            dataset1.find({ ANNUAL_SALARY : {'$gt': req.query.gt , '$lt': req.query.lt }},function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult1",{data:alldata,chartType:chartType});
         
      }
    });
        }
    }
    
});

module.exports=app;