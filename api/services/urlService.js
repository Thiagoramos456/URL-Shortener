const generateRandomURL = require('../helpers/generateRandomURL');
const urlModel = require('../models/urlModel');

const shortenUrl = async (oldUrl) => {
  const newUrl = generateRandomURL();
  let fixedOldUrl = oldUrl;
  if (!oldUrl.startsWith('http')) fixedOldUrl = 'http://' + oldUrl;
  console.log(fixedOldUrl);
  await urlModel.saveUrl(fixedOldUrl, newUrl);
  return newUrl;
}

const getUrl = async (newUrl) => {
  const { oldUrl } = await urlModel.getUrl(newUrl);
  return oldUrl;
}

module.exports = { shortenUrl, getUrl };