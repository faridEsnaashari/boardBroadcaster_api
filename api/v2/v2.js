const express = require("express");
const router = express.Router();

const registerRoute = require(`${global.paths.v2.routes.register}`);
const resendVerificationMailRoute = require(
  `${global.paths.v2.routes.resendVerificationMail}`
);
const verifyEmailRoute = require(`${global.paths.v2.routes.verifyEmail}`);
const loginRoute = require(`${global.paths.v2.routes.login}`);
const userRoute = require(`${global.paths.v2.routes.user}`);
const boardRouter = require(`${global.paths.v2.routes.board}`);
const logoutRoute = require(`${global.paths.v2.routes.logout}`);

router.use("/register", registerRoute);
router.use("/resendVerificationMail", resendVerificationMailRoute);
router.use("/verifyEmail/", verifyEmailRoute);
router.use("/login/", loginRoute);
router.use("/user", userRoute);
router.use("/board", boardRouter);
router.use("/logout", logoutRoute);

module.exports = router;
