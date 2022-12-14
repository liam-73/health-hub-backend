const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    profile: String,
    name: String,
    dateOfBirth: String,
    gender: String,
    diagnosis: String,
    degree: String,
    appointment_fee: Number,
    daily_token_numbers: Number,

    user_type: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      default: ' ',
    },
  },
  {
    timestamps: true,
  },
);

userSchema.virtual('appointments', {
  ref: 'Appointment',
  localField: '_id',
  foreignField: 'doctor_id',
});

userSchema.virtual('transacitions', {
  ref: 'Transacition',
  localField: '_id',
  foreignField: 'doctor_id',
});

userSchema.virtual('transacitions', {
  ref: 'Transacition',
  localField: '_id',
  foreignField: 'patient_id',
});

userSchema.index({ name: 'text' });

const User = mongoose.model('User', userSchema);

module.exports = User;
