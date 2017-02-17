var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BlogSchema = new Schema({
  userName: String,
  title: String,
  body: String,
  date: { type: Date, default: Date.now }
})

var Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;
