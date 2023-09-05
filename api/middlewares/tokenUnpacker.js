const { INTERNAL_ERR, UNAUTHORIZED_ERR } = require(
  `${global.paths.tools.statusCodes}`,
);
const { unpackJWT } = require(`${global.paths.tools.helper}`);

const tokenUnpacker = async (req, res, next) => {
  const { verificationToken } = req.params;

  try {
    const payload = await unpackJWT(verificationToken);

    req.body.verificationDetails = payload;

    next();
  } catch (err) {
    console.error(err);

    if (err.message === "jwt malformed" || err.message === "invalid token") {
      return res.responser(UNAUTHORIZED_ERR, "token is invalid");
    }

    if (err.message === "invalid signature") {
      return res.responser(
        UNAUTHORIZED_ERR,
        "there is no verification with this token",
      );
    }

    if (err.message === "there is no verification with this token") {
      return res.responser(
        UNAUTHORIZED_ERR,
        "there is no verification with this token",
      );
    }

    return res.responser(INTERNAL_ERR, "internal server error");
  }
};

module.exports = tokenUnpacker;
