const connection = require('./connection');

const saveUrl = async (oldUrl, newUrl) => {
  await connection.execute('INSERT INTO url (oldUrl, newUrl) VALUES (?, ?)', [
    oldUrl,
    newUrl,
  ]);
};

const getUrl = async (newUrl) => {
  const [[url]] = await connection.execute(
    'SELECT oldUrl FROM url WHERE newUrl = ?',
    [newUrl]
  );
  return url;
};

module.exports = { saveUrl, getUrl };
