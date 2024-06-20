const mongoose = require("mongoose");

const Teachers = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
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
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    nationality: { type: String, required: true },
    religion: { type: String, required: true },
    maritalStatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widowed"],
      required: true,
    },
    emailId: String,
    mobileNo: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
    photo: String,
    address: { type: String, required: true },
    jobTitle: { type: String, required: true },
    department: { type: String, required: true },
    joiningDate: {
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
    allotmentClass: { type: Number, required: true },
    allotmentSection: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    ifscCode: { type: String, required: true },
    bankName: { type: String, required: true },
    salaryAmount: { type: Number, required: true },
    accountNumber: { type: Number, required: true },
    emergencyContactNumber: {
      type: Number,
      min: [10, "Mobile Number is not less then 10 digits"],
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Teachers", Teachers);
