const mongoose = require("mongoose");

const InternSchema = new mongoose.Schema({
  name: String,
  email: String,
  walletAddress: String,
});

module.exports = mongoose.model("Intern", InternSchema);