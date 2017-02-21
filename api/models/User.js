var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  blogs: [{type: Schema.Types.ObjectId, ref: 'Blog'}]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;

