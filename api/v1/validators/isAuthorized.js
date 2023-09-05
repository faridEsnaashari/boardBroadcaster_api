const { UNAUTHORIZED_ERR } = require(`${global.paths.tools.statusCodes}`);
const { unpackJWT } = require(`${global.paths.tools.helper}`);
const { UserModel } = require(`${global.paths.v1.mongooseModels}`);

const isAuthorized = async (req, res, next) => {
  const userToken = req.headers.authorization;

  if (!userToken) {
    return res.responser(
      UNAUTHORIZED_ERR,
      "An authorization should provied in the header of the request to access this resource",
      null,
      { requiredHeader: "authorization" },
    );
  }

  let user = null;

  try {
    user = await unpackJWT(userToken);
  } catch (err) {
    console.error(err);
    return res.responser(UNAUTHORIZED_ERR, "Authorization token is invalid");
  }

  try {
    const userObject = await UserModel.findById(user.id);
    if (!userObject) {
      throw new Error();
    }

    req.authorization = { user: userObject };

    next();
  } catch (err) {
    console.error(err);
    return res.responser(UNAUTHORIZED_ERR, "user is invalid");
  }
};

module.exports = isAuthorized;
