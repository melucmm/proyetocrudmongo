const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  servicio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    required: true
  },
  fecha: {
    type: Date,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);