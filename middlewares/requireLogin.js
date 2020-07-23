module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "Your must log in" });
  }

  //evething is good so continue to the actual request handler
  next();
};
