const mongoose = require("mongoose");

const Subjects = new mongoose.Schema(
  {
    subject_name: String,
    subject_code: String,
    subject_assigned_by: String,
    subject_period: String,
    examination_date: String,
    exam_mode: String,
    result_publication_date: String,
    marks: String,
    grad: String,
    passing_status: String,
    certificate_distribution_date: String,
    certificate_number: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Subjects", Subjects);
