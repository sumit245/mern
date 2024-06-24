const mongoose = require("mongoose");

const Questions = new mongoose.Schema(
  {
    questions: [
      {
        text: String,
        options: String,
        correct_answer: String,
      },
    ],
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Questions", Questions);
