const express = require("express");
const controller = require("../controllers/user.controller");

const router = express.Router();

router.get("/test", controller.test);

module.exports = router;