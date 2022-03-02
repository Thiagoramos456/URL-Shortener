const connection = require('./connection');

const saveUrl = async (oldUrl, newUrl) => {
  await connection.execute('INSERT INTO url (old, new) VALUES (?, ?)', 
  [oldUrl, newUrl]);
};

module.exports = { saveUrl };