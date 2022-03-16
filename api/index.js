require('express-async-errors');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const { validateUrl } = require('./middlewares/validateUrl')
const { shortenUrl, redirectToUrl } = require('./controllers/urlController');

app.use(bodyParser.json());
app.use(cors());

const PORT = 3001;

// Shortens a URL
app.post('/url', validateUrl, shortenUrl);

// Redirect to a URL
app.get('/:encodedUrl', redirectToUrl);

app.listen(PORT, () => console.log('Online'));