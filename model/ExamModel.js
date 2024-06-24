const mongoose = require("mongoose");
const Questions = require("./QuestionModel");
const Exams = new mongoose.Schema(
  {
    exam_type: String,
    duration: String,
    passing_marks: Number,
    full_marks: Number,
    subject: String,
    alloted_class: String,
    instructions: String,
    student_detail: Array,
    questions: { type: mongoose.Types.ObjectId, ref: Questions },
  },

  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Exams", Exams);
