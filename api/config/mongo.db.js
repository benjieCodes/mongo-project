var mongoose = require('mongoose');
var connection = mongoose.connection;

function log () {
  connection.on('error', function (err) {
    console.log('Error connecting to Mongo DB: ' + err)
  })
  connection.on('open', function (res) {
    if (res) {
      console.log(res)
    }
    console.log('Connected to Mongo Database')
  })

  connection.on('connecting', function () {
    console.log('connecting to MongoDB...')
  })
  connection.on('connected', function () {
    console.log('MongoDB connected!')
  })
  connection.on('reconnected', function () {
    console.log('MongoDB reconnected!')
  })
  connection.on('disconnected', function () {
    console.log('MongoDB disconnected!')
  })
}

var server = log()
module.exports = server;
