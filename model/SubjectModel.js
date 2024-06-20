const mongoose = require("mongoose");

const Subjects = new mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
    },
    subjectCode: {
      type: Number,
      required: true,
    },
    subjectAssignedBy: String,
    subjectPeriod: {
      type: Number,
      required: true,
    },
    examinationDate: {
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

    examMode: { type: String, enum: ["Offline", "Online"], required: true },
    resultPublicationDate: {
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

    marks: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      enum: ["A", "B", "C", "D", "E", "O"],
      required: true,
    },
    passingStatus: {
      type: String,
      required: true,
    },
    certificateDistributionDate: {
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
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Subjects", Subjects);
