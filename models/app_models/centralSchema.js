var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  user_id: { type: String, required: true },   //should be changed to ObjectId, ref "User"
  name : String,
  address_name : String,
  created_at: { type: Date, default: Date.now }
});