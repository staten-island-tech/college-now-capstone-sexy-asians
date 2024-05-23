const user = require("../Models/user");
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
  res.json();
};

exports.addUser = async (req, res) => {
  try {
    const shop = new user(req.body);
    await shop.save();
    res.json("shop");
  } catch (error) {
    res.status(500).json(error);
  }
};
