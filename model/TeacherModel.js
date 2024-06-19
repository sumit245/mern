const mongoose = require("mongoose");

const Teachers = new mongoose.Schema(
  {
    teachername: String,
    employeeid: String,
    teacherdepartment: String,
    accountnumber: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Teachers", Teachers);
