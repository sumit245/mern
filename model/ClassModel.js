const mongoose = require("mongoose");

const Classes = new mongoose.Schema({
    className: String,
    description: String
}, { timestamps: true })

module.exports = mongoose.model('Classes', Classes)