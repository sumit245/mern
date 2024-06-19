const mongoose = require("mongoose");

const Teachers = new mongoose.Schema(
  {
    teacherName: String,
    employeeId: String,
    department: String,
    accountNumber: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Teachers", Teachers);
