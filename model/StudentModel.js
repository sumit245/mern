const mongoose = require("mongoose");

const Students = new mongoose.Schema(
  {
    studentName: String,
    fathersName: String,
    address: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Students", Students);
