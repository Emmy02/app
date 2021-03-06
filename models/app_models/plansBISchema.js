var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new mongoose.Schema({
  centrals_num : Number,
  bases_num: Number,
  taxis_num: Number,
  _subscription_plan: { type: String, ref: 'SubscriptionPlan'},
  personal_chat : Boolean,
  created_at: { type: Date, default: Date.now}
});