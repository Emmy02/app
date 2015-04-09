var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
var cellphoneReg = '^(1\s*[-\/\.]?)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT])\.?\s*(\d+))*$';

module.exports = new mongoose.Schema({
  name: { type: String, required: true, lowercase:true },
  last_name: { type: String, required: true, lowercase:true },
  age: { type: Number, min: 18, max: 100 },
  address: String,
  email:  { type: String, validate: reg },
  email2: { type: String, validate: reg },
  subscription_plan: String,
  cellphone_num : { type: Number, required: true, validate: cellphoneReg },
  cellphone_num2: { type: Number, required: true, validate: cellphoneReg },
  password: String, //hash created from password
  created_at: { type: Date, default: Date.now}
});