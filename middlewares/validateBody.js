const validateUrlBody = (req, res, next) => {
  if (!req.body.url) return res.status(400).json({ error: 'Bad Request: body must contain the following format: { url: "example.com" }' })
  next();
}

module.exports = { validateUrlBody };