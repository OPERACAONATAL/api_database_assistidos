'use strict';

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    _id: {
        type: Number,
        unique : true
    },
    nome: {
        type: String,
    },
    idade: {
        type: String,   // por causa dos anos e meses que se escrevem
    },
    camiseta: {
        tamanho: {
            type: String,   // Está como string porque os valores são do tipo 'P', 'M', 'G', etc...
        },
        existe: Boolean
    },
    calca: {
        tamanho: {
            type: String,   // Está como string porque os valores são do tipo 'P', 'M', 'G', etc...
        },
        existe: Boolean
    },
    sapato: {
        tamanho: {
            type: String,
        },
        existe: Boolean
    },
    roupa_intima: {
        type: Boolean,
    },
    guloseima: {
        type: Boolean
    },
    shampoo: {
        type: Boolean
    },
    sabonete: {
        type: Boolean
    },
    escova_de_dente: {
        type: Boolean
    },
    creme_dental: {
        type: Boolean
    },
    observacao: {
        type: String
    },
    recebida: {
        type: Boolean
    }
});

module.exports = mongoose.model('Cards', cardSchema);
