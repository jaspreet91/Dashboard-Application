var express = require("express");
var app=express.Router();
var dataset4=require("../../models/schema/dataset4Schema");



//  this is the dataset 4 

app.get("/dataset4",function(req, res) {
    dataset4.find().sort({numericMonth : 'asc',}).exec(function(err,alldata){
        if(err){
            console.log(err);
        }else{
            
            res.render("show/dataset4show",{data:alldata});
        }
    });
});

app.get("/searchResult4",function(req,res) {
    //var Month=req.query.Month;
    //var year=req.query.Year;
    //var gasPrices=req.query.gasPrice;
   
    var chartType=req.query.chartType;
    
    if(req.query.Month === "" && req.query.Year === "" && req.query.gasPrices ===""){
                    dataset4.find({Month:req.query.Month}).sort({numericMonth : 'asc',}).exec(function(err,allData){
                    if(err){
                       // console.log(err);
                    }else{
                       // console.log(allData);
                            res.render("results/searchResult4",{data:allData,chartType:chartType});
                    }
                    });  
            } 
             
             else  if(req.query.Month !== "" && req.query.Year === "" && req.query.gasPrices ===""){
                    dataset4.find({Month:req.query.Month}).sort({numericMonth : 'asc',}).exec(function(err,allData){
                    if(err){
                       // console.log(err);
                    }else{
                       // console.log(allData);
                            res.render("results/searchResult4",{data:allData,chartType:chartType});
                    }
                    });  
            } 
            
            else if ( req.query.Month === "" && req.query.Year !== "" && req.query.gasPrices ===""){
                  dataset4.find({ Year : req.query.Year }).sort({numericMonth : 'asc',}).exec(function(err,allData){
               if(err){
                     console.log(err);
                 }else{ 
                         // console.log(allData);
                         res.render("results/searchResult4",{data:allData,chartType:chartType});
                 }
                   });  
             }  
             
             else if ( req.query.Month === "" && req.query.Year === "" && req.query.gasPrices !=="")
             {
                 dataset4.find({ gasPrices : req.query.gasPrices }).sort({numericMonth : 'asc',}).exec(function(err,allData){
               if(err){
                     console.log(err);
                 }else{ // console.log(allData);
                         res.render("results/searchResult4",{data:allData,chartType:chartType});
                 }
                   });  
             } 
              else if ( req.query.Month !== "" && req.query.Year !== "" && req.query.gasPrices ==="")
             {
                 dataset4.find({$and :[{Month:req.query.Month},{Year:req.query.Year}] }).sort({numericMonth : 'asc',}).exec(function(err,allData){
               if(err){
                     console.log(err);
                 }else{  // console.log(allData);
                         res.render("results/searchResult4",{data:allData,chartType:chartType});
                 }
                   });  
             }
              else if ( req.query.Month !== "" && req.query.Year === "" && req.query.gasPrices !=="")
             {
                 dataset4.find({$and :[{Month:req.query.Month},{gasPrices:req.query.gasPrices}] }).sort({numericMonth : 'asc',}).exec(function(err,allData){
               if(err){
                     console.log(err);
                 }else{  //console.log(allData);
                         res.render("results/searchResult4",{data:allData,chartType:chartType});
                 }
                   });  
             }
             
             else if ( req.query.Month === "" && req.query.Year !== "" && req.query.gasPrices !=="")
             {
                 dataset4.find({$and :[{Year:req.query.Year},{gasPrices:req.query.gasPrices}] }).sort({numericMonth : 'asc',}).exec(function(err,allData){
               if(err){
                        console.log(err);
                 }else{ //console.log(allData);
                         res.render("results/searchResult4",{data:allData,chartType:chartType});
                 }
                   });  
             }
             
             
             else if ( req.query.Month !== "" && req.query.Year !== "" && req.query.gasPrices !=="")
             {
                  dataset4.find({$and :[{Month: req.query.Month},{Year:req.query.Year},{gasPrices:req.query.gasPrices}] }).sort({numericMonth : 'asc',}).exec(function(err,allData){
               if(err){
                     console.log(err);
                 }else{ // console.log(allData);
                         res.render("results/searchResult4",{data:allData,chartType:chartType});
                 }
                   });  
             }
           
           
       
});

app.get("/distinctdataset4show",function(req,res){
    var chartType=req.query.chartType;
    //console.log(chartType)  ;   
 dataset4.find({$or :[{Year:req.query.Year},{Month:req.query.Month},{gasPrices:req.query.gasPrices}]}).sort({numericMonth : 'asc'}).exec(function(err,allData){
                
                 if(err)
                        {   
                            console.log(err);
                        }
                    else{
                        //console.log(allData);
                            res.render("results/searchResult4",{chartType:chartType,data:allData});
                    }
                
                 } );
   
                
});
     
              

app.get("/distinctdataset4",function(req, res) {
    var p=req.query.distinctColumn ;
    dataset4.find().distinct((''+p),function(err,allData){
        
        if(err)
        {
            console.log(err);
        }
    else{
       // console.log(allData);
    res.render("distinct/distinctdataset4",{data:allData,x:p});      
    }
    });
});


app.get("/lessorgrtrcountdataset4",function(req, res) {
    var chartType= req.query.chartType;
   
    if(req.query.columnType==="Month"){
    if(req.query.Monthg !=="" && req.query.Yearg !=="" && req.query.selectionType ==="greaterThan")
      {
   dataset4.find({$and :[{Year:req.query.Yearg},{Month:req.query.Monthg}]},function(err,allD){
        if(err){
            console.log(err);
        }else{
            //console.log(allD[0].Month);
            dataset4.find({ numericMonth : {'$gt': allD[0].numericMonth}}).sort({numericMonth : 'asc'})
   .exec(function(err, allData) {
           if(err){
         console.log(err);
     }else{
        // console.log(allData);
         res.render("results/searchResult4",{data:allData,chartType:chartType});
     }
        });        }

});
}

// this is the less than months and year section :

    
    else if(req.query.Monthl !=="" && req.query.Yearl !=="" && req.query.selectionType==="lessThan")
    {
   dataset4.find({$and :[{Year:req.query.Yearl},{Month:req.query.Monthl}]}).sort({numericMonth : 'asc'})
   .exec(function(err,allD){
        if(err){
            console.log(err);
        }else{
            //console.log(allD[0].Month);
    dataset4.find({ numericMonth : {'$lt': allD[0].numericMonth}}).sort({numericMonth : 'asc'})
   .exec(function(err, allData) {
           if(err){
         console.log(err);
     }else{
         //console.log(allData);
         res.render("results/searchResult4",{data:allData,chartType:chartType});
     }
        });        }

});
}

   else 
    {
  dataset4.find({$and :[{Year:req.query.Yearl},{Month:req.query.Monthl}]}).sort({numericMonth : 'asc'})
  .exec(function(err,allDl){
        if(err){
            console.log(err);
        }else{
    dataset4.find({$and :[{Year:req.query.Yearg},{Month:req.query.Monthg}]}).sort({numericMonth : 'asc'})
  .exec(function(err,allDg){
        if(err){
            console.log(err);
        }else{
            console.log(allDl);
            console.log(allDg);
            
            //console.log(allD[0].Month);{ Value : {'$gt': req.query.gt , '$lt': req.query.lt }}
    dataset4.find({ numericMonth : {'$gt':allDg[0].numericMonth,'$lt':allDl[0].numericMonth}},function(err, allData) {
          if(err){
         console.log(err);
     }else{
         //console.log(allData);
         res.render("results/searchResult4",{data:allData,chartType:chartType});
     }
        });        }
});
            }
});
}
        }
        
    else if(req.query.columnType==="Year"){
        if(req.query.gt==="" && req.query.lt !==""){
            dataset4.find({ Year : {'$lt': req.query.lt }}).sort({numericMonth : 'asc'})
   .exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult4",{data:alldata,chartType:chartType});
      }
    });
        }else if(req.query.gt !=="" && req.query.lt ===""){
            dataset4.find({ Year : {'$gt': req.query.gt}}).sort({numericMonth : 'asc'})
   .exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult4",{data:alldata,chartType:chartType});
      }
    });
        }
        else{
            dataset4.find({ Year : {'$gt': req.query.gt , '$lt': req.query.lt }}).sort({numericMonth : 'asc'})
   .exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult4",{data:alldata,chartType:chartType});
         
      }
    });
        }
    }else{
        if(req.query.gt==="" && req.query.lt !==""){
            dataset4.find({ gasPrices : {'$lt': req.query.lt }}).sort({numericMonth : 'asc'})
   .exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult4",{data:alldata,chartType:chartType});
      }
    });
        }else if(req.query.gt !=="" && req.query.lt ===""){
      dataset4.find({ gasPrices : {'$gt': req.query.gt}}).sort({numericMonth : 'asc'})
   .exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult4",{data:alldata,chartType:chartType});
      }
    });
        }
        else{
      dataset4.find({ gasPrices : {'$gt': req.query.gt , '$lt': req.query.lt }}).sort({numericMonth : 'asc'})
   .exec(function(err,alldata){
      if(err){
          console.log(err);
      }  else
      {
          res.render("results/searchResult4",{data:alldata,chartType:chartType});
         
      }
    });
        }
    }        
        
});


module.exports=app;