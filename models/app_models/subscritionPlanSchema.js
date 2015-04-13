var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = new Schema({
  name: String,
  description: String,
  cost: Number,
  _users: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  _plans_BI: [{ type: Schema.Types.ObjectId, ref: 'PlansBI' }],
  end_date  : { type: Date, default: Date.getFullYear(2016) },
  start_date: { type: Date, default: Date.now }
});