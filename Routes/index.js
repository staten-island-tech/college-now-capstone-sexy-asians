const express = require("express");
const router = new express.Router();
const shopController = require("../Controllers/shopController");

router.get("/", shopController.authMiddleware, shopController.homePage);
/* router.get("/", (req, res) => {
  const teacher = { name: "whalen", subject: "computer science", tenure: true };
  try {
    res.json(teacher);
  } catch (error) {
    console.log(error);
  }
});
router.get("/teacher/:name", (req, res) => {
  try {
    res.json(req.params.name);
  } catch (error) {}
}); */
router.post("/add", shopController.createShop);

module.exports = router;
