const express = require("express");
const router = new express.Router();
const authController = require("../Controllers/authController");
const shopController = require("../Controllers/shopController");

router.post("/login", authController.login, authController.authCheck);
router.post("/register", authController.register);
router.get("/updateCollection", authController.updateCollection);

module.exports = router;
