const express = require("express");
const router = express.Router();

const isAuthorized = require(`${global.paths.v2.validators.isAuthorized}`);

const getController = require(`${global.paths.v2.controllers.user}/get`);

router.get("/", isAuthorized, getController);

module.exports = router;
