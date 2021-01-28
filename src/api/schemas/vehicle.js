/**
 * Vehicle Schema
 */
const mongoose = require('mongoose');

module.exports.VehicleSchema = new mongoose.Schema({
    year: {type: String, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    body_styles: {type: String, required: true},
}, { timestamps: true })
