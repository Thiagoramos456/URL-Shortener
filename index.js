require('express-async-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { validateUrl } = require('./middlewares/validateUrl')
const { validateUrlBody } = require('./middlewares/validateBody')
const { shortenUrl, redirectToUrl } = require('./controllers/urlController');

app.use(bodyParser.json());

const PORT = 3000;

// Shortens a URL
app.post('/url', validateUrlBody, validateUrl, shortenUrl);

// Redirect to a URL
app.get('/:encodedUrl', redirectToUrl);

app.listen(PORT, () => console.log('Online'));