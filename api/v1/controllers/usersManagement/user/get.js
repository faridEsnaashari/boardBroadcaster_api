const User = require(`${ global.paths.v1.mongooseModels }`).UserModel;

const { SUCCESS_MSG } = require(`${ global.paths.tools.statusCodes }`);

const getController = async(req, res) => {
    const requestedUser = req.authorization.user;
    const { complete } = req.query;

    let user = {};

    if(complete){
        user = await User.findOne({ email: requestedUser.email }, { _id: 0, name: 1 }).populate("boards", { _id: 0, name: 1, boardIdentifier: 1 });
    }
    else{
        user = await User.findOne({ email: requestedUser.email }, { _id: 0, name: 1 });
    }

    const preparedUser = { name: user.name };
    const { boards } = user;
    res.responser(SUCCESS_MSG, null, { user: preparedUser, boards });
};

module.exports = getController;
