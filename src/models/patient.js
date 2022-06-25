const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        profile: {
            type: String
        },
        
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            trim: true
        },

        address: {
            type: String,
        },

        dateOfBirth: {
            type: String
        },

        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            requried: true,
            ref: 'Hospital',
        }
    },
    {
    timestamps: true
    }
);

const Patient = mongoose.model( "Patient", patientSchema );

module.exports = Patient;