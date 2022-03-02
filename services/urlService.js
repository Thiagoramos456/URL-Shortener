const generateRandomURL = require('../helpers/generateRandomURL');
const { saveUrl, getUrl } = require('../models/urlModel');

const shortenUrl = async (oldUrl) => {
  const newUrl = generateRandomURL();
  await saveUrl(oldUrl, newUrl);
  return newUrl;
}

const getUrl = async (newUrl) => {
  const originalUrl = await getUrl(newUrl);
  return originalUrl;
}

module.exports = { shortenUrl, getUrl };