const request = require("request");
var http = require('http');
var data;

var express = require("express");
var app = express();

const ejs = require('ejs');

app.set("view engine", "ejs");


app.locals.pretty = true;

app.use(express.static(__dirname + '/views'));

var fs = require("fs");

http
.createServer(function(request, response) {
      response.writeHead(200, { "Content-Type": "text/html" }); 



      response.end();
     })

  app.get("/", function(req, res) {
    res.render('pages/index');
    })

  app.get("/bruins", function(req, res) {
    res.render('pages/bruins');
    })

  app.get("/carolina", function(req, res) {
    res.render('pages/carolina');
    })

  app.get("/colorado", function(req, res) {
    res.render('pages/colorado');
    })
  
  app.get("/nashville", function(req, res) {
    res.render('pages/nashville');
    })
  
  app.get("/oilers", function(req, res) {
    res.render('pages/oilers');
    })
  
  app.get("/sanjose", function(req, res) {
    res.render('pages/sanjose');
    })
    
  app.get("/vegas", function(req, res) {
    res.render('pages/vegas');
     })
    
  app.get("/washington", function(req, res) {
    res.render('pages/washington');
    })
      

  .listen(3000);