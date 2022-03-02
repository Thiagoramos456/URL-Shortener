const generateRandomURL = require('../helpers/generateRandomURL');

const shortenUrl = (oldUrl) => {
  const newUrl = generateRandomURL();
  // await saveUrl(oldUrl, newUrl);
  return newUrl;
}

module.exports = { shortenUrl };