const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const result = new Schema({
  studentId: String, //{ type: String, ref: "Student" },
  examId:  String,             //{ type: String, ref: "Exam" },
  score: Number,
  maxScore: Number,
});

module.exports = mongoose.model("Result", result);
