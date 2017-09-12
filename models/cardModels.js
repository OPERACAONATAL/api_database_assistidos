'use strict';

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: 'Digite o nome da pessoa'
    },
    age: {
        type: Number,
        required: 'Digite a idade da pessoa'
    },
    tshirt: {
        type: String,   // Está como string porque os valores são do tipo 'P', 'M', 'G', etc...
        required: 'Digite o tamanho da camiseta'
    }
});

module.exports = mongoose.model('Cards', cardSchema);
