var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  name : { type: String, required: true },
  address_name: String,
  _central : { type: String , ref: 'Central' },
  taxis : [{ type: Schema.Types.ObjectId, ref: 'Taxis'}],
  created_at: { type: Date, default: Date.now }
});