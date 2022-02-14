const express = require("express");
const router = express.Router();
const { protector } = require("../middleware/auth");
const { admiLogin } = require("../controller/login");
router.route("/login").post(admiLogin);
module.exports = router;
