const URL_REGEX_PATTERN =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

const validateUrl = (req, res, next) => {
  const { url } = req.body;
  console.log(req.body);
  if (!req.body.url)
    return res.status(400).json({
      error:
        'Bad Request: body must contain the following format: { url: "example.com" }',
    });
  const isUrlValid = URL_REGEX_PATTERN.test(url);
  if (!isUrlValid) res.status(400).json({ error: 'Invalid URL. Try again.' });

  next();
};

module.exports = { validateUrl };
