const express = require("express");
const router = express.Router();

const isAuthorized = require(`${ global.paths.v1.validators.isAuthorized }`);

const getController = require(`${ global.paths.v1.controllers.user }/get`);

router.get("/", isAuthorized, getController);

module.exports = router;
