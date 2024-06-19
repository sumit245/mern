const mongoose = require("mongoose");

const Students = new mongoose.Schema(
  {
    studentname: String,
    id: String,
    fathername: String,
    address: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Students", Students);
