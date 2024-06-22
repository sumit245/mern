const mongoose = require("mongoose");
const Classes = require('./ClassModel')

const teacherSchema = new mongoose.Schema(
  {
    employee_id: {
      type: Number,
      min: [4],
      required: true,
    },
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
    gender: {
      type: "object",
      properties: {
        gender: {
          type: "string",
          enum: ["male", "female", "transgender"],
        },
      },
      required: ["gender"],
    },

    blood_group: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    nationality: String,
    religion: String,
    password: String,
    marital_status: String,
    email_id: String,
    phone_number: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
    photo: String,
    address: { type: String, required: true },
    currentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    job_title: String,
    department: String,
    joining_date: {
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
    allotment_class: {
      type: mongoose.Types.ObjectId,
      ref: Classes
    },
    allotment_section: {
      type: String,
      enum: ["A", "B", "C", "D"],
      required: true,
    },
    account_number: {
      type: Number,
      min: [14, "Account Number not less than fourteen digit"],
      required: true,
    },
    ifsc_code: {
      type: String,
      min: [10, "ifsc  code not less than ten digit"],
      required: true,
    },
    bank_name: String,
    salary_amount: String,
    epfo_account_number: {
      type: Number,
      min: [14, " epfo Account Number not less than fourteen digit"],
      required: true,
    },
    emergency_contact_number: {
      type: Number,
      min: [10, "Mobile Number not less than ten digit"],
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true }
  }
);



module.exports = mongoose.model("Teachers", teacherSchema);
