const express = require ("express");
const router = express.Router();

const registerRoute = require(`${ global.paths.v1.routes.register }`);

router.use("/register", registerRoute);

module.exports = router;
