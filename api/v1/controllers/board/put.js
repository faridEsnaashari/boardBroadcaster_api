const { BoardModel } = require(`${ global.paths.v1.mongooseModels }`);
const { NOTFOUND_ERR, INTERNAL_ERR, SUCCESS_MSG } = require(`${ global.paths.tools.statusCodes }`);

const put = async(req, res) => {
    const { ...newBoard } = req.body;
    const { id: _id } = req.params;

    try{
        const updatedBoard = await BoardModel.findOneAndUpdate(
            { _id },
            { ...newBoard },
            { new: true },
        );

        if(!updatedBoard){
            return res.responser(NOTFOUND_ERR, "board not found");
        }

        res.responser(SUCCESS_MSG, "board has been updated successfully", updatedBoard);
    }
    catch(err){
        console.error(err);
        res.responser(INTERNAL_ERR, "internal server error");
    }
};

module.exports = put;
