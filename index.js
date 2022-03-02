require('express-async-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { shortenUrl } = require('./controllers/urlController');

app.use(bodyParser.json());

const PORT = 3000;

app.post('/url', shortenUrl);

app.listen(PORT, () => console.log('Online'));