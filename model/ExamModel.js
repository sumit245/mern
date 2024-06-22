const mongoose = require("mongoose");

const Exams = new mongoose.Schema(
  {
    exam_types: { type: mongoose.types.ObjectId, ref: Exam_Types },

    duration: String,
    passing_marks: Number,
    subject: String,
    alloted_class: String,
    instructions: String,
    student_detail: { type: mongoose.types.ObjectId, ref: StudentModel },

    Question: [{ types: mon }],
  },

  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Exams", Exams);
