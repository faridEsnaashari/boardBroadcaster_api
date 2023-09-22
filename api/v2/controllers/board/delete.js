const { BoardModel } = require(`${global.paths.mongooseModels}`);
const { NOTFOUND_ERR, INTERNAL_ERR, SUCCESS_MSG } = require(
  `${global.paths.tools.statusCodes}`
);

const deleteController = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const deletedBoard = await BoardModel.findOneAndDelete({ _id });
    if (!deletedBoard) {
      return res.responser(NOTFOUND_ERR, "board not found");
    }

    res.responser(
      SUCCESS_MSG,
      "board has been deleted successfully",
      deletedBoard
    );
  } catch (err) {
    console.error(err);

    res.responser(INTERNAL_ERR, "internal server error");
  }
};

module.exports = deleteController;
