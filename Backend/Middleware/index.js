exports.authMiddleware = (req, res, next) => {
  if (req.body.user) {
    next();
  } else {
    abortNavigation();
    res.json("signin");
  }
};
