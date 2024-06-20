const mongoose = require("mongoose");

const Students = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    admissionNo: {
      type: Number,
      min: [4, "Must be at least"],
      required: true,
    },
    rollNo: {
      type: Number,
      min: [2],
      required: true,
    },
    admissionDate: {
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
    mobileNo: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
    emailId: { type: String, required: true, match: /\S+@\S+\.\S+/ },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pinCode: {
      type: Number,
      min: [6],
      required: true,
    },
    religion: { type: String, required: true },
    cast: { type: String, required: true },
    dob: {
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
    address: { type: String, required: true },
    currentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },

    schoolHouseId: String,
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    hostelRoomId: String,
    aadharNo: {
      type: Number,
      min: [14, "Addhar Number"],
      required: true,
    },
    bankName: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    ifscCode: { type: String, required: true },
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccuption: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    motherOccuption: {
      type: String,
      required: true,
    },
    guardianName: {
      type: String,
      required: true,
    },
    guardianOccuption: {
      type: String,
      required: true,
    },
    guardianAddress: {
      type: String,
      required: true,
    },
    guardianEmail: String,
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    previousSchool: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      min: [4, "height"],
      required: true,
    },
    weight: {
      type: Number,
      min: [3, "weight"],
      required: true,
    },

    disReason: String,
    note: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Students", Students);
