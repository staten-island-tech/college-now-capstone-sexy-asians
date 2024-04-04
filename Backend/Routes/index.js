const express = require("express");
const router = new express.Router();
const shopController = require("../Controllers/shopController");

router.get("/", shopController.authMiddleware, shopController.homePage);
router.post("/add", shopController.addUser);

module.exports = router;
