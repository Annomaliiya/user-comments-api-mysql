const express = require("express");

const { ctrlWrapper, validation } = require("../../middleware");
const userSchema = require("../../schemas/user");
const ctrl = require("../../controllers");

const router = express();

router.get("/", ctrlWrapper(ctrl.getComments));

router.post("/", validation(userSchema), ctrlWrapper(ctrl.addComment));

module.exports = router;
