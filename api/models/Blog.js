var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
  userName: String,
  title: String,
  body: String,
  date: { type: Date, default: Date.now },
  likes: Number,
  _creator: {type: Schema.ObjectId, ref: 'User'}
})

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
