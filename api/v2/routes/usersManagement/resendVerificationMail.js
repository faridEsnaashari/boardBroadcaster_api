const express = require("express");
const router = express.Router();

const getController = require(
  `${global.paths.v2.controllers.resendVerificationMail}/get`,
);

const getValidator = require(
  `${global.paths.v2.validators.resendVerificationMail}/get`,
);

router.get("/", getValidator, getController);

module.exports = router;
