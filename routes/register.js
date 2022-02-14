const express = require("express");
const router = express.Router();
const { createRegisterUser } = require("../controller/register");
router.route("/register").post(createRegisterUser);
module.exports = router;
