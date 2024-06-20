const mongoose = require("mongoose");

const Teachers = new mongoose.Schema(
  {
    employee_id: String,
    first_name: String,
    last_name: String,
    date_of_birth: String,
    gender: String,
    blood_group: String,
    nationality: String,
    religion: String,
    marital_status: String,
    email_id: String,
    phone_number: String,
    photo: String,
    address: String,
    job_title: String,
    department: String,
    joining_date: String,
    allotment_class: String,
    allotment_section: String,
    account_number: String,
    ifsc_code: String,
    bank_name: String,
    salary_amount: String,
    epfo_account_number: String,
    emergency_contact_number: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Teachers", Teachers);
