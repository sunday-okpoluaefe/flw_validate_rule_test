/**
 * Trip Schema
 */
const {AddressSchema} = require ("./address");

const {RiderSchema}  = require("./rider");

const mongoose = require('mongoose');

module.exports.TripSchema = new mongoose.Schema({
    account : { type: mongoose.Schema.Types.ObjectId, index: true, ref: "Account"},
    path: {
        location: AddressSchema,
        destination: AddressSchema
    },
    location: AddressSchema,
    destination: AddressSchema,
    polyline: { type: String },
    car: { type: mongoose.Schema.Types.ObjectId, index: true, ref: "Car"},
    status: {type: String, default: 'pending', enum: ['pending', 'started', 'ongoing', 'cancelled', 'completed']},
    riders: [RiderSchema],
    bookings: [RiderSchema],
    seats: { type: Number, default: 0 },
}, { timestamps: true })

/*
on join trip -- generate an on-screen pin/code that will be presented to the driver on start trip
 */
