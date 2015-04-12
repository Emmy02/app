var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
  taxi_id : String,
  lat: String,
  log: String,
  address_name: String
});