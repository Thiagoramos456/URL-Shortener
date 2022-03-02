const connection = require('./connection');

const saveUrl = async (oldUrl, newUrl) => {
  await connection.execute('INSERT INTO url (oldUrl, newUrl) VALUES (?, ?)', 
  [oldUrl, newUrl]);
};

module.exports = { saveUrl };