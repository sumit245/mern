const mongoose = require("mongoose");

const Admins = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Admins", Admins);
