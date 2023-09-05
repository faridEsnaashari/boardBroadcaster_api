const { UserModel } = require(`${global.paths.v1.mongooseModels}`);
const { INTERNAL_ERR, CONFILICT_ERR, SUCCESS_MSG, NOTFOUND_ERR } = require(
  `${global.paths.tools.statusCodes}`,
);
const sendVerificationEmail = require(`${global.paths.tools.nodemailer}`);

const get = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.responser(NOTFOUND_ERR, "there is no user with this email");
    }

    const token = await user.getVerificationToken({
      email: user.email,
      verificationCode: user.verificationCode,
    });
    await sendVerificationEmail(
      user.email,
      `${global.env.GENERAL.APP_URL}/signup/verify_email/${token}`,
      user.name,
    );

    return res.responser(SUCCESS_MSG, "email sent successfully");
  } catch (err) {
    console.error(err);
    return res.responser(INTERNAL_ERR, "internal server error");
  }
};

module.exports = get;
