const mongoose = require("mongoose");

const Subjects = new mongoose.Schema(
  {
    subjectName: String,
    subjectId: String,
    teacher: String,
    subjectPeriod: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Subjects", Subjects);
