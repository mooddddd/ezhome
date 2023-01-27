const express = require("express");
const router = express.Router();
const users = require("../src/user/user.router");
const auth = require("../src/auth/auth.router");

router.use("/users", users);
router.use("/auth", auth);

module.exports = router;
