const { UserModel } = require(`${ global.paths.v1.mongooseModels }`);
const { INTERNAL_ERR, NOTFOUND_ERR, SUCCESS_MSG } = require(`${ global.paths.tools.statusCodes }`);

const getController = async(req, res) => {
    const { verificationDetails } = req.body;

    try{
        const user = await UserModel.findOne({ email: verificationDetails.email, verifcicationCode: verificationDetails.vrificationCode });

        if(!user){
            return res.responser(NOTFOUND_ERR, "user does not exist whit this email address.");
        }

        user.verified = true;
        const savedUser = await user.save();
        return (user === savedUser)? res.responser(SUCCESS_MSG, "email verified successfully") : res.responser(INTERNAL_ERR, "internal server error");
    }
    catch(err){
        console.error(err);
        return res.responser(INTERNAL_ERR, "internal server error");
    }
};

module.exports = getController;
