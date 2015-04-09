module.exports = new mongoose.Schema({
  centrals_num : Number,
  bases_num: Number,
  taxis_num: Number,
  personal_chat : Boolean,
  created_at: { type: Date, default: Date.now}
});