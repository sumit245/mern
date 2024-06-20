const mongoose = require("mongoose");

const Students = new mongoose.Schema(
  {
    student_id: String,
    first_name: String,
    last_name: String,
    date_of_birth: String,
    gender: String,
    blood_group: String,
    email: String,
    phone_number: String,
    address: String,
    student_photo: String,
    admission_id: String,
    admission_date: String,
    course: String,
    hostel_number: String,
    bus_number: String,
    bus_route_number: String,
    bus_driver_name: String,
    bus_driver_phone_number: String,
    fathers_name: String,
    mothers_name: String,
    fathers_phone_number: String,
    mothers_phone_number: String,
    emergency_contact_number: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Students", Students);
