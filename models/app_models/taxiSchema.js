var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cellphoneReg = '^(1\s*[-\/\.]?)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT])\.?\s*(\d+))*$';

var taxi = new Schema({
  driver_name:  { type: String, required: true },
  driver_cel:   { type: Number, required: true },
  base_id: { type: String, ref: 'Base' },
  car_num: String,
  car_description : String
});

taxi.path('driver_cel').validate(function (v) {
  return  cellphoneReg.test(v);
}, 'Invalid cellphone Number');

module.exports = taxi;
