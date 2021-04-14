const express = require("express");
const router = express.Router();

const postController = require(`${ global.paths.v1.controllers.register }/post`);

router.post("/", postController);

module.exports = router;
