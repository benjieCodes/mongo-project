// package used for password
var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  blogs: [{type: Schema.Types.ObjectId, ref: 'Blog'}]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

