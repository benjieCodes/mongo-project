var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;

app.get('/user', function (req, res) {
  User.findOne();
})

app.post('/create', function (req, res) {
  var user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.username = req.body.username;
})
