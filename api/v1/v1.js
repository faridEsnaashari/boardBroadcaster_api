const express = require ("express");
const router = express.Router();

const registerRoute = require(`${ global.paths.v1.routes.register }`);
const resendVerificationMailRoute = require(`${ global.paths.v1.routes.resendVerificationMail }`);

router.use("/register", registerRoute);
router.use("/resendVerificationMail", resendVerificationMailRoute);

module.exports = router;
