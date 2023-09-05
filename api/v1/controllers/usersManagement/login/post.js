const { createJWT } = require(`${global.paths.tools.helper}`);
const { UserModel } = require(`${global.paths.v1.mongooseModels}`);
const { INTERNAL_ERR, SUCCESS_MSG, UNAUTHORIZED_ERR } = require(
  `${global.paths.tools.statusCodes}`,
);

const postController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.responser(UNAUTHORIZED_ERR, "email or password is incurrect");
    }

    if (!user.verified) {
      return res.responser(UNAUTHORIZED_ERR, "email not verified yet");
    }

    if (!user.checkPassword(password)) {
      return res.responser(UNAUTHORIZED_ERR, "email or password is incurrect");
    }

    const payload = { name: user.name, email: user.email, id: user.id };
    const token = await createJWT(payload);

    return res.responser(SUCCESS_MSG, "user loged in successfully", {
      userToken: token,
    });
  } catch (err) {
    console.error(err);

    return res.responser(INTERNAL_ERR, "internal server error");
  }
};

module.exports = postController;
