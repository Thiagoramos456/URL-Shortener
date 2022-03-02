const urlService = require('../services/urlService');

const shortenUrl = async (req, res) => {
  const { url } = req.body;
  const newUrl = await urlService.shortenUrl(url);
  const formatedUrl = `${req.header('host')}/${newUrl}`;
  return res.status(201).json({ newUrl: formatedUrl, originalUrl: url });
}

module.exports = { shortenUrl }