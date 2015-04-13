var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  _user: { type: String , ref: 'User' },   //should be changed to ObjectId, ref "User"
  name : String,
  address_name : String,
  bases : [{ type: Schema.Types.ObjectId, ref: 'Base' }],
  created_at: { type: Date, default: Date.now }
});