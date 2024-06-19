const mongoose = require("mongoose");

const Subjects = new mongoose.Schema(
  {
    subjectname: String,
    subjectid: String,
    subjectteachingby: String,
    subjectperiod: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Subjects", Subjects);
