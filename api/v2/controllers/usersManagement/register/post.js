const { UserModel } = require(`${global.paths.mongooseModels}`);
const sendVerificationEmail = require(`${global.paths.tools.nodemailer}`);
const { DUPLICATE_ERR } = require(`${global.paths.tools.mongoErrors}`);
const { INTERNAL_ERR, CONFILICT_ERR, SUCCESS_CREATE_MSG } = require(
  `${global.paths.tools.statusCodes}`
);

const post = async (req, res) => {
  const { email, password, name } = req.body;

  const user = new UserModel({ name, email, password });

  user.addVerificationCode();
  const token = await user.getVerificationToken({
    email: user.email,
    verificationCode: user.verificationCode,
  });

  try {
    await user.save();
  } catch (err) {
    console.error(err);

    if (err.code === DUPLICATE_ERR) {
      return res.responser(
        CONFILICT_ERR,
        "this email is already exists",
        null,
        { field: "email" }
      );
    }

    return res.responser(INTERNAL_ERR, "internal server error");
  }

  try {
    await sendVerificationEmail(
      email,
      `${global.env.GENERAL.APP_URL}/signup/verify-email/${token}`,
      name
    );
  } catch (err) {
    console.error(err);
    return res.responser(INTERNAL_ERR, "internal server error");
  }

  return res.responser(SUCCESS_CREATE_MSG, "user created successfully");
};

module.exports = post;
