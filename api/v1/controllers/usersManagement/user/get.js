const User = require(`${ global.paths.v1.mongooseModels }`).UserModel;

const { SUCCESS_MSG } = require(`${ global.paths.tools.statusCodes }`);

const getController = async(req, res) => {
    const { id: userId } = req.authorization.user;
    const { complete } = req.query;

    let user = {};

    if(complete && complete === "true"){
        user = await User.findByIdWithBoards(userId, { verified: 0, verificationCode: 0, password: 0 });
    }
    else{
        user = await User.findById(userId, { verified: 0, verificationCode: 0, password: 0 });
    }

    res.responser(SUCCESS_MSG, null, user);
};

module.exports = getController;
