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
    initialData: {
        type: Date
    },
    finalData: {
        type: Date
    },
    maxValue: {
        type: Number
    },
    minValue: {
        type: Number
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'category'
        },
    ],
    users: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'user'
        }
    ]
})

module.exports = mongoose.model('objective', dataSchema)
