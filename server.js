'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const card = require('./models/cardModels');
const routes = require('./routes/cardRoutes');

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

mongoose.Promise = global.Promise;
// If running locally
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});
mongoose.connection.on('connected', () => {
	console.log("connected to database");
});
mongoose.connection.on('error', (err) => {
	console.log("Database error "+ err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

// middleware para tratar requesições mal direcionadas.
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
