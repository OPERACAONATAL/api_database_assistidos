'use strict';

const mongoose = require('mongoose');
const card_db = require('../models/cardModels');

exports.list_all_cards = (req, res) => {
    card_db.find({}, (err, card) => {
        if(err)
            res.send(err.message);
        else
            res.send(card);
    });
}

exports.create_card = (req, res) => {
    new_card.save((err, card) => {
        if(err)
            res.send(err.message);
        else
            res.json(card);
    })
}

exports.read_card = (req, res) => {
    card_db.findById(req.params.cardId, (err, card) => {
        if(err)
            res.send(err.message);
        else
            res.json(card);
    })
}

exports.update_card = (req, res) => {
    console.log(req.body);
    card_db.findOneAndUpdate({_id: req.params.cardId}, {}, {new: true}, (err, card) => {
        if(err)
            res.send(err.message);
        else {
            card.camiseta.existe = req.body.camiseta;
            card.calca.existe = req.body.calca;
            card.sapato = req.body.sapato;
            card.roupa_intima = req.body.roupa_intima;
            card.guloseima = req.body.guloseima;
            card.shampoo = req.body.shampoo;
            card.sabonete = req.body.sabonete;
            card.escova_de_dente = req.body.escova_de_dente;
            card.creme_dental = req.body.creme_dental;
            card.observacao = req.body.observacao;
            
            /*  Salva no BD as alterações   */
            card.save().then(data => {
                res.json(data);
            }).catch(error => {
                res.json(error);
            });
        }
    });
}
