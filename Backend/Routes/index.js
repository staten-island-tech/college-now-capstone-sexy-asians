const express = require("express");
const router = new express.Router();
const shopController = require("../Controllers/shopController");
const authController = require("../Controllers/authController");

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
