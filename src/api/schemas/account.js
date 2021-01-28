/**
 * Account Schema
 */
const mongoose = require('mongoose');

module.exports.AccountSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    approved: {type: Boolean, default: false},
    profileImage: {type: String},
    gender: {type: String, enum: ['female', 'male']},
    status: {type: String, enum: ['approved', 'suspended', 'pending']},
    location: {
        latitude: {type: String},
        longitude: {type: String},
        address: {type: String}
    },
    email: {
        value: {type: String, required: true, lowercase: true, trim: true, unique: true},
        confirmed: {type: Date},
        confirmationToken: {type: String}
    },
    driver: mongoose.Schema({
            status: {type: Boolean, default: false},
            approved: {type: Boolean, default: false},
            licence: {type: String},
    },{ timestamps: true }),
    guarantor: mongoose.Schema({
        firstName: {type: String, default: false},
        lastName: {type: String, default: false},
        email: {type: String},
        country: {
            name: {type: String},
            abbr: {type: String},
            currency: {type: String}
        },
        location: {
            latitude: {type: String},
            longitude: {type: String},
            address: {type: String}
        },
        phone: {
            number: { type: String },
            code: { type: String },
            value: { type: String }
        },
    },{ timestamps: true }),
    country: {
        name: {type: String},
        abbr: {type: String},
        currency: {type: String}
    },
    phone: {
        number: { type: String },
        code: { type: String },
        value: { type: String },
        authToken: { type: String }
    },
    rating: { type: Number, default: 1.0 },
    selfie: { type: String },
    identification: {
        url: { type: String },
        verified: { type: Boolean, default: false },
    },
    verification: {
        video: { type: String },
        selfie: { type: String },
        verified: { type: Boolean, default: false },
    },
    wallet: {
        balance: {type: Number, default: 0},
        pending: {type: Number, default: 0},
    }
}, { timestamps: true })
