const express = require("express");
const router = express.Router();

const getController = require(`${global.paths.v2.controllers.verifyEmail}/get`);
const tokenUnpacker = require(`${global.paths.middlewares.tokenUnpacker}`);

router.get("/:verificationToken", tokenUnpacker, getController);

module.exports = router;
