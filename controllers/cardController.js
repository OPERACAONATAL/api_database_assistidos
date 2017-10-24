'use strict';

const mongoose = require('mongoose');
const card_db = require('../models/cardModels');

// Test insertion
// var card = new card_db({
//     _id: 638,
//     name: "Julio de Almeida",
//     age: 89,
//     tshirt: "G"
// });
// card.save((err,card) => {
//     if(err)
//         console.log("Already inserted");
//     else
//         console.log("card saved " + card);
// })

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
    res.json(req.body);
    // card_db.findOneAndUpdate({_id: req.params.cardId}, req.body, {new: true}, (err, card) => {
    //     if(err)
    //         res.send(err.message);
    //     else
    //         res.json(card);
    // });
}
