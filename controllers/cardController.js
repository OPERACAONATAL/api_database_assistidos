'use strict';

const mongoose = require('mongoose');
const card_db = mongoose.model('Cards');

exports.list_all_cards = (req, res) => {
    card_db.find({}, (err, card) => {
        if(err)
            res.send(err);
        else
            res.send(card);
    });
}

exports.create_card = (req, res) => {
    const new_card = new card_db(req.body);

    new_card.save((err, card) => {
        if(err)
            res.send(err);
        else
            res.json(card);
    })
}

exports.read_card = (req, res) => {
    card_db.findById(req.params.cardId, (err, card) => {
        if(err)
            res.send(err);
        else
            res.json(card);
    })
}

exports.update_card = (req, res) => {
    card_db.findOneAndUpdate({_id: req.params.cardId}, req.body, {new: true}, (err, card) => {
        if(err)
            res.send(err);
        else
            res.json(card);
    });
}
