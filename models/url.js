const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortID: { type: String, required: true, unique: true },
    redirecturl: { type: String, required: true },
    visithistory: [{ timestamp: { type: Number } }],
    createdby: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
