const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    value: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Date
    },
    name: {
        type: String
    },
    company: {
        type: String
    },
    place: {
        lat: {
            required: true,
            type: String
        },
        lng: {
            required: true,
            type: String
        }
    },
    objective: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'objective'
        },
    ],
    category: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'category'
        },
    ],
    user: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'user'
        }
    ]



})

module.exports = mongoose.model('item', dataSchema)
