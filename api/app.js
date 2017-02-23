// database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogProject', function(err) {
  if(err) {
    console.log('mongoose error - ', err);
  }
    console.log('Mongoose is running...')
});

// url connection


var express = require('express');
var bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8100'); //LOCATION OF CLIENT APP
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});

// routes
var userRouter = require('./routes/users');
var blogRouter = require('./routes/blogs');

var port = 8106

app.listen(port, function(err) {
  if (err) {
    console.log('server error - ' + err)
  }
  setTimeout(function () {
    console.log('Server is running...\nRunning on port: ' + port);
  }, 50)
})
app.use('/', userRouter);
app.use('/', blogRouter);
