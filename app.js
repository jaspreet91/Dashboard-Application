var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var serveStatic = require('serve-static');


// defining the database Schema
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/chicago_data");

// defining routers

var dataset1Route=require("./Controller/filter/dataset1");
var dataset2Route=require("./Controller/filter/dataset2");
var dataset3Route=require("./Controller/filter/dataset3");
var dataset4Route=require("./Controller/filter/dataset4");
var dataset5Route=require("./Controller/filter/dataset5");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(serveStatic('public/images/'));
app.use(serveStatic('public/Semantic/'));
app.use(serveStatic('Controller/Chart/'));
app.use(serveStatic('Controller/googlemaps/'));
app.use(serveStatic('views/show'));
app.use(serveStatic('views/distinct'));
app.use(serveStatic('views/results'));


app.use(dataset1Route);
app.use(dataset2Route);
app.use(dataset3Route);
app.use(dataset4Route);
app.use(dataset5Route);


app.get("/",function(req, res) {
    res.render("home");
});


app.listen(process.env.PORT,process.env.Ip,function(){
    console.log("the Server has started ");
});