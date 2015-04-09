module.exports = new mongoose.Schema({
  driver_name: { type: String, required: true, lowercase: true },
  taxi_id: String,
  message: String
});