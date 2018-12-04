const mongoose = require("mongoose");
const { Schema } = mongoose;

const receiptSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});
module.exports = { receiptSchema };
