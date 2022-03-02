const generateRandomURL = require('../helpers/generateRandomURL');

const shortenUrl = async (oldUrl) => {
  const newUrl = generateRandomURL();
  await saveUrl(oldUrl, newUrl);
  return newUrl;
}

module.exports = { shortenUrl };