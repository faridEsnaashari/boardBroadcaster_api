const { BoardModel, UserModel } = require(`${ global.paths.v1.mongooseModels }`);
const { NOTFOUND_ERR, INTERNAL_ERR, SUCCESS_CREATE_MSG } = require(`${ global.paths.tools.statusCodes }`);

const post = async(req, res) => {
    const requestedUserId = req.authorization.user.id;
    const { name } = req.body;

    let user = null;

    try{
        user = await UserModel.findOne({ _id: requestedUserId }, { verificationCode: 0, verified: 0, password: 0 });
    }
    catch(err){
        console.error(err);

        return res.responser(NOTFOUND_ERR, "user not found");
    }

    const newBoard = new BoardModel({
        name,
        owner: user,
    });

    try{
        const board = await newBoard.save();

        res.responser(SUCCESS_CREATE_MSG, "board has been created successfully", board);
    }
    catch(err){
        console.error(err);
        res.responser(INTERNAL_ERR, "internal server error");
    }
};

module.exports = post;
