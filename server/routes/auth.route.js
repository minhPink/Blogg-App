const express = require("express");

const router = express.Router();

const controller = require("../controllers/auth.controller.js");

router.post("/signup", controller.signup);

module.exports = router;