const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

const generateToken = async function (user) {
  const token = jwt.sign({ _id: user._id }, `${process.env.SECRET}`, {
    expiresIn: 60 * 60,
  });
  /* user.tokens.push({ token });
  await user.save(); */
  // end commented code

  return token;
};

exports.register = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    console.log(req.body.email);
    console.log(req.body.password);
    res.json({ success: false, msg: "Please pass email and password." });
  } else {
    console.log(req.body.email);
    let newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const token = await generateToken(newUser);

    await newUser.save(); // save the user
    res.json({
      success: true,
      msg: "Successful created new user.",
      newUser,
      token,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    const token = await generateToken(user);
    if (!isMatch) {
      throw new Error("Unable to login");
    }

    res.json({ user, token });
  } catch (error) {
    console.log(error);
    res.json("user not found");
  }
};

exports.updateCollection = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });

    let collection = user.collection;

    await user.save();
    res.json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.authCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, `${process.env.SECRET}`);
    const user = await user.findOne({
      _id: decoded._id,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user; //route hanlder now will not have to fetch the user account
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};
exports.protected = async (req, res) => {
  let user = req.user;
  try {
    res.json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};
