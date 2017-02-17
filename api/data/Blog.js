var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BlogSchema = new Schema({
  userName: String,
  title: String,
  body: String,
  date: { type: Date, default: Date.now }
})

var Blog = mongoose.model('Blog', BlogSchema);

app.get('/blog', function (req, res) {
})

app.post('/create', function (req, res) {
  var blog = new Blog();
  blog.username = req.body.username;
  blog.title = req.body.title;
  blog.body = req.body.body;
  blog.date = req.body.date;
})

