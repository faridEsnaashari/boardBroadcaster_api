const express = require("express");
const router = express.Router();

const postController = require(`${global.paths.v1.controllers.login}/post`);
const postValidator = require(`${global.paths.v1.validators.login}/post`);

router.post("/", postValidator, postController);

module.exports = router;
