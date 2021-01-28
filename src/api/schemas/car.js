/**
 * Account Schema
 */
const mongoose = require('mongoose');

module.exports.CarSchema = new mongoose.Schema({
    model: {type: String, required: true},
    make: {type: String, required: true},
    plate: {type: String, required: true},
    color: {type: String},
    seats: {type: Number, default: 0},
    trim: {type: String},
    account: { type: mongoose.Schema.Types.ObjectId, index: true, ref: "Account"},
    year: {type: String, required: true},
    front: {type: String},
    approved: {type: Boolean, default: false},
    rear: {type: String},
    documents: { type: Map, of: String },
    media: [ new mongoose.Schema({
        url: {type: mongoose.Schema.Types.ObjectId},
        type : {type: String, enum: ['image', 'video', 'audio', 'document']}
    }) ]
}, { timestamps: true })
