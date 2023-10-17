const express = require("express");
const router = express.Router();

const getController = require(`${global.paths.v2.controllers.logout}/get`);

router.get("/", getController);

module.exports = router;
