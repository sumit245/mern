const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("Users", Users);
