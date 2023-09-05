const express = require("express");
const router = express.Router();

const registerRoute = require(`${global.paths.v1.routes.register}`);
const resendVerificationMailRoute = require(
  `${global.paths.v1.routes.resendVerificationMail}`,
);
const verifyEmailRoute = require(`${global.paths.v1.routes.verifyEmail}`);
const loginRoute = require(`${global.paths.v1.routes.login}`);
const userRoute = require(`${global.paths.v1.routes.user}`);
const boardRouter = require(`${global.paths.v1.routes.board}`);

router.use("/register", registerRoute);
router.use("/resendVerificationMail", resendVerificationMailRoute);
router.use("/verifyEmail/", verifyEmailRoute);
router.use("/login/", loginRoute);
router.use("/user", userRoute);
router.use("/board", boardRouter);

module.exports = router;
