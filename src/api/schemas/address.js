
const mongoose = require('mongoose');

module.exports.AddressSchema = new mongoose.Schema({
    latitude: { type: String},
    longitude: { type: String},
    address: { type: String},
    country: { type: String},
    city: { type: String},
    speed: { type: String},
    locality: { type: String},
    createAt:  { type: String},
},{ timestamps: true })
