const mongoose = require("mongoose");

const Students = new mongoose.Schema(
  {
    student_id: String,
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
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
    blood_group: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    email: String,
    phone_number: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
    address: { type: String, required: true },
    student_photo: String,
    admission_id: {
      type: Number,
      min: [4, "Must be at least"],
      required: true,
    },
    admission_date: {
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
    course: String,
    hostel_number: {
      type: Number,
      min: [2],
      required: true,
    },
    bus_number: {
      type: String,
      min: [10],
      required: true,
    },
    bus_route_number: {
      type: Number,
      min: [2],
      required: true,
    },
    bus_driver_name: {
      type: String,
      required: true,
    },
    bus_driver_phone_number: {
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
    fathers_phone_number: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
    mothers_phone_number: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
    emergency_contact_number: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Students", Students);
