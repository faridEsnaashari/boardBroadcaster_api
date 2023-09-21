const express = require("express");
const router = express.Router();

const postController = require(`${global.paths.v2.controllers.login}/post`);
const postValidator = require(`${global.paths.v2.validators.login}/post`);

router.post("/", postValidator, postController);

module.exports = router;
