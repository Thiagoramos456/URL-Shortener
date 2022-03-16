const generateRandomURL = require('../helpers/generateRandomURL');
const urlModel = require('../models/urlModel');

const shortenUrl = async (oldUrl) => {
  const newUrl = generateRandomURL();
  await urlModel.saveUrl(oldUrl, newUrl);
  return newUrl;
}

const getUrl = async (newUrl) => {
  const { oldUrl } = await urlModel.getUrl(newUrl);
  return oldUrl;
}

module.exports = { shortenUrl, getUrl };