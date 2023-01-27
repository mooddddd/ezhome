const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/upload");
const { userController: controller } = require("./user.module");

router.post("/", upload.single("pofilePic"), (req, res, next) => controller.postSignup(req, res, next));

module.exports = router;
