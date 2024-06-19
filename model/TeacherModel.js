const mongoose = require("mongoose");

const Teachers = new mongoose.Schema(
  {
    employeeid: String,
    firstName: String,
    lastName: String,
    dateOfBrith: String,
    gender: String,
    bloodGroup: String,
    nationality: String,
    religion: String,
    maritalStatus: String,
    emailId: String,
    phoneNumber: String,
    photo: String,
    address: String,
    jobTitle: String,
    department: String,
    joiningDate: String,
    allotmentClass: String,
    allotmentSection: String,
    accountNumber: String,
    ifscCode: String,
    bankName: String,
    salaryAmount: String,
    accountNumber: String,
    emergencyContactNumber: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Teachers", Teachers);
