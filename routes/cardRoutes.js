'use strict';

module.exports = app => {
    const card = require('../controllers/cardController');

    app.route('/cards')
       .get(card.list_all_cards)
       .post(card.create_card);

    app.route('/cards/:cardId')
       .get(card.read_card)
       .put(card.update_card);
}
