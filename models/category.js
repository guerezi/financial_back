const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    icon: {
        type: String
    },
    color: {
        type: String
    },
    maxValue: {
        type: Number
    }
})

module.exports = mongoose.model('category', dataSchema)
