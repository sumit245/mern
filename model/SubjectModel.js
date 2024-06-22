const mongoose = require("mongoose");

const Subjects = new mongoose.Schema(
  {
    subject_name: String,
    subject_code: {
      type: String,
      min: [6],
      required: true,
    },
    subject_assigned_by: String,
    subject_period: {
      type: Number,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
      required: true,
    },
    examination_date: {
      type: "object",
      properties: {
        day: {
          type: "integer",
          minimum: 1,
          maximum: 31,
        },
        month: {
          type: "integer",
          minimum: 1,
          maximum: 12,
        },
        year: {
          type: "integer",
        },
      },
      required: ["day", "month", "year"],
    },
    exam_mode: String,
    result_publication_date: {
      type: "object",
      properties: {
        day: {
          type: "integer",
          minimum: 1,
          maximum: 31,
        },
        month: {
          type: "integer",
          minimum: 1,
          maximum: 12,
        },
        year: {
          type: "integer",
        },
      },
      required: ["day", "month", "year"],
    },
    marks: String,
    grade: {
      type: String,
      enum: ["A", "B", "C", "D", "E"],
      required: true,
    },
    passing_status: String,
    certificate_distribution_date: {
      type: "object",
      properties: {
        day: {
          type: "integer",
          minimum: 1,
          maximum: 31,
        },
        month: {
          type: "integer",
          minimum: 1,
          maximum: 12,
        },
        year: {
          type: "integer",
        },
      },
      required: ["day", "month", "year"],
    },
    certificate_number: {
      type: String,
      min: [6],
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Subjects", Subjects);
