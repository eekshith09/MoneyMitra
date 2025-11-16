const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", TransactionSchema);
