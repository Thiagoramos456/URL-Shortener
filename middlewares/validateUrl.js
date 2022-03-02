const URL_REGEX_PATTERN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

const validateUrl = (req, res, next) => {
  const { body: { url } } = req;

  const isUrlValid = URL_REGEX_PATTERN.test(url);
  if (!isUrlValid) res.status(400).json({ error: 'Invalid URL. Try again.' })

  next();
}

module.exports = { validateUrl };