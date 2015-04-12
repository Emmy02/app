var mongoose = require('mongoose');
var cellphoneReg = '^(1\s*[-\/\.]?)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT])\.?\s*(\d+))*$';

schema = new mongoose.Schema({
  driver_name: { type: String, required: true, lowercase: true },
  driver_cel: { type: Number, required: true },
  base_id: String,
  car_num: String,
  car_description : String
});

schema.path('driver_cel').validate(function (v) {
  return  cellphoneReg.test(v);
}, 'Invalid cellphone Number');

module.exports = schema;
