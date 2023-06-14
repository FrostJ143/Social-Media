const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {registerUser, loginUser} = require("../controllers/authController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;