const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Item = require('./models/item');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/robloxstore', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/items', (req, res) => {
    Item.find().then(items => res.json(items));
});

app.post('/api/items', (req, res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item));
});

app.listen(3000, () => console.log('Server running on port 3000'));
