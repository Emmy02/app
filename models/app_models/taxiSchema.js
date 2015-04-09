var cellphoneReg = '^(1\s*[-\/\.]?)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT])\.?\s*(\d+))*$';
module.exports = new mongoose.Schema({
  driver_name: { type: String, required: true, lowercase: true },
  driver_cel: { type: Number, required: true, validate: cellphoneReg },
  base_id: String,
  car_num: String,
  car_description : String
});
