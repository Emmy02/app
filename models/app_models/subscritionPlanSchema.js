var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
  name: String,
  description: String,
  cost: Number,
  plans_BI: String,
  end_date  : { type: Date, default: Date.now},
  start_date: { type: Date, default: Date.now}
});