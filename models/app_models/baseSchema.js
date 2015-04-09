module.exports = new mongoose.Schema({
  name : { type: String, required: true, lowercase: true },
  address_name: String,
  central_id : String,
  administrator_id: String,
  created_at: { type: Date, default: Date.now }
});