const mongoose = require("mongoose");

const Students = new mongoose.Schema(
  {
    student: {
      type: String,
      ref: "Student",
      required: true,
    },
    date_of_birth: {
      type: Date,
    },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    blood_group: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },

    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    email: String,
    phone_number: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
    fathers_name: {
      type: String,
      required: true,
    },
    mothers_name: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Students", Students);
