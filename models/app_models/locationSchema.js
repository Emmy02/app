var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

module.exports = new Schema({
  taxi_id : { type: String, ref: 'Taxi' },
  lat: String,
  log: String,
  address_name: String
});