'use strict';

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    _id: {
        type: Number,
        requied: 'Digite o nome da pessoa',
        unique : true
    },
    name: {
        name: {
            type: String,
            requied: 'Digite o nome da pessoa'
        },
        exists: Boolean
    },
    age: {
        age: {
            type: Number,
            requied: 'Digite a idade da pessoa'
        },
        exists: Boolean
    },
    tshirt: {
        type: String,   // Está como string porque os valores são do tipo 'P', 'M', 'G', etc...
        required: 'Digite o tamanho da camiseta'
    },
    underwear: {
        type: String,   // Está como string porque os valores são do tipo 'P', 'M', 'G', etc...
        required: 'Digite o tamanho da peça'
    },
    candy: {
        exists: Boolean
    }
});

module.exports = mongoose.model('Cards', cardSchema);
