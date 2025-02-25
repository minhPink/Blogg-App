const express = require("express");

const router = express.Router();

const controller = require("../controllers/auth.controller.js");

router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.post("/google", controller.google);

module.exports = router;
