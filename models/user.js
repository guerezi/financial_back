const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },


    // Nome
    // email
    // senha
    // id

    // salário
    // Aniversário


})

module.exports = mongoose.model('user', dataSchema)
