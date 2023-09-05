const express = require("express");
const router = express.Router();

const postController = require(`${global.paths.v1.controllers.register}/post`);

const postValidator = require(`${global.paths.v1.validators.register}/post`);

router.post("/", postValidator, postController);

module.exports = router;
