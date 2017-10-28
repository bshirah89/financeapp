var express = require('express');
var app = express();
var path = require('path');
var port = 5000;


// set up routes
//var index = require('./index');

//app.use runs and looks for this static directory first
app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/',function(req,res){
    res.send('hello');
});

app.listen('5000',function(err){
    console.log('running on port' + port);
});