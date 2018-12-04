const mongoose = require("mongoose");
const { Schema } = mongoose;
const receiptSchema = require("./Receipt");
const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [receiptSchema],
  yes: { type: Boolean, default: 0 },
  no: { type: Boolean, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});
mongoose.model("surveys", "surveySchema");
