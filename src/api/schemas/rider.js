/*
    Riders schema
 */
const mongoose = require('mongoose');
const {AddressSchema} = require ("./address");

module.exports.RiderSchema = new mongoose.Schema({
    account: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    seat: { type: Number, default: 0 },
    path: {
        location: AddressSchema,
        destination: AddressSchema,
    },
    location: AddressSchema,
    destination: AddressSchema,
    pin: { type: String },
    polyline: { type: String },
    maxAmount: { type: Number },
    minAmount: { type: Number },
    averageAmount: { type: Number },
    start: { type: String },
    stop: { type: String },
    status: { type: String, enum: ['accepted', 'declined', 'pending'], default: 'pending'}
},{ timestamps: true })
