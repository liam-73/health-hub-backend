const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    fee: {
      type: Number,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    reason: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
