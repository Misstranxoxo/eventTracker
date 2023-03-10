require('dotenv').config()
require('./models/db');

// Exploring APIS Further
const express = require('express');
const bodyparser = require('body-parser'); 

const app = express();

app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.json(req.body);
})

app.listen(3000, () => console.log('server started'));