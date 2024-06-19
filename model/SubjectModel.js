const mongoose = require("mongoose");

const Subjects = new mongoose.Schema(
  {
    subjectName: String,
    subjectCode: String,
    subjectAssigned_by: String,
    subjectPeriod: String,
    examinationDate: String,
    examMode: String,
    resultPublicationDate: String,
    marks: String,
    gread: String,
    passingStatus: String,
    certificateDistributionDate: String,
    certificateNumber: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Subjects", Subjects);
