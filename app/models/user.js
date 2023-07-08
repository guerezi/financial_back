const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    salary: {
        tye: Number
    },
    birthdate: {
        tye: Date
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'role'
        }
    ]
})

module.exports = mongoose.model('user', dataSchema)
