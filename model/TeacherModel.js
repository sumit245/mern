const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    employee_id: String,
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    gender: { type: String, enum: ["male", "female"] },
    blood_group: String,
    nationality: String,
    religion: String,
    password: String,
    marital_status: String,
    email_id: {
      type: String,
      required: [true, "Email Address is required"],
      unique: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]/.test(v)
        },
        message: props => `${props.value} is not a valid email`
      }
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true
    },
    phone_number: String,
    photo: String,
    address: {
      type: Array
    },
    profile_picture: Buffer,
    job_title: String,
    department: String,
    joining_date: Date,
    allotment_class: String,
    allotment_section: String,
    account_number: String,
    ifsc_code: String,
    bank_name: String,
    salary_amount: String,
    epfo_account_number: String,
    emergency_contact_number: {
      type: Number,
      min: [10, 'Mobile Number not less than ten digit'],
      required: true
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true }
  }
);



module.exports = mongoose.model("Teachers", teacherSchema);
