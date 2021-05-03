const express = require("express");
const router = express.Router();

const getController = require(`${ global.paths.v1.controllers.resendVerificationMail }/get`);

const getValidator = require(`${ global.paths.v1.validators.resendVerificationMail }/get`);

router.get("/", getValidator, getController);

module.exports = router;
