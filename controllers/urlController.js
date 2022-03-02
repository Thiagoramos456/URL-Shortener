const urlService = require('../services/urlService');

const shortenUrl = async (req, res) => {
  const { url } = req.body;
  const newUrl = await urlService.shortenUrl(url);
  return res.status(201).json({ newUrl });
}

module.exports = { shortenUrl }