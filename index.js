require('express-async-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { shortenUrl, redirectToUrl } = require('./controllers/urlController');

app.use(bodyParser.json());

const PORT = 3000;

// Shortens a URL
app.post('/url', shortenUrl);

// Redirect to a URL
app.get('/:encodedUrl', redirectToUrl);

app.listen(PORT, () => console.log('Online'));