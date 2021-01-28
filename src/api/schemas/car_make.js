/**
 * Vehicle Schema
 */
const mongoose = require('mongoose');

module.exports.CarMakeSchema = new mongoose.Schema({
    make: {type: String, required: true},
    models: [
        {
            model: {type: String, required: true},
            years:  [{type: String, required: true}],
            trims:  [{type: String, required: true}],
        }
        ],
}, { timestamps: true })
