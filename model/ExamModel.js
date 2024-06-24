const mongoose = require("mongoose");

const Exams = new mongoose.Schema(
  {
    exam_types: String,

    duration: {
      type: String,
      required: true,
    },
    passing_marks: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    alloted_class: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    student_detail: Array,

    question: Array,
  },

  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Exams", Exams);
