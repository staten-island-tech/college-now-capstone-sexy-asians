exports.homePage = (req, res) => {
  const stores = ["dunkins", "tim hos", "starbucks"];
  try {
    res.json(stores);
  } catch (error) {
    console.log(error);
  }
};

exports.middlewareSample = (req, res, next) => {
  req.name = "next"; //runs before the res is sent to the user
  next(); //cues the next step of the res
};

exports.authMiddleware = (req, res, next) => {
  if (req.body.user) {
    next();
  } else {
    res.json("you need to check ur fucking brain");
  }
};
