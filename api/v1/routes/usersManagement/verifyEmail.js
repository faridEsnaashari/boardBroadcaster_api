const express = require("express");
const router = express.Router();

const tokenUnpacker = require(`${ global.paths.middlewares.tokenUnpacker }`);

router.get("/:verificationToken", tokenUnpacker);

module.exports = router;
