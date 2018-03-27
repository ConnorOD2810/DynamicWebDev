var express = require('express');
var app = express();
var knockknock = require('knock-knock-jokes');

app.get('/', function(req, res){
 res.send("Hello world! by express");
});

app.get('/test', function(req, res){
//Sets the route^
  res.send("this is route 2");
  //Sends text to page^
});

app.get('/route3', function(req, res){
  res.send("Third route");
});

app.get('/joke', function(req, res){
//sets route^
  var joke = knockknock();
  res.end(joke);
});

app.get('/add', function(req, res){
  var x = req.query.x;
  var y = req.query.y;
  res.send("X + Y ="+(x+y));
});

app.listen(8080);
