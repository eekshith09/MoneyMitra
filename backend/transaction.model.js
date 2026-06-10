// transaction.model.js
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    date: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
