const express = require("express");
const router = express.Router();

const postValidator = require(`${ global.paths.v1.validators.login }/post`);

router.post('/', postValidator);

module.exports = router;
