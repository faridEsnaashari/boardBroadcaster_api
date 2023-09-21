const { NOTFOUND_ERR, INTERNAL_ERR, SUCCESS_MSG } = require(
  `${global.paths.tools.statusCodes}`,
);
const { BoardModel } = require(`${global.paths.mongooseModels}`);

const get = async (req, res) => {
  const { id } = req.params;

  try {
    const board = await BoardModel.findOne({ boardIdentifier: id });
    if (!board) {
      return res.responser(NOTFOUND_ERR, "board not found");
    }

    res.responser(SUCCESS_MSG, "the board exists");
  } catch (err) {
    console.error(err);

    res.responser(INTERNAL_ERR, "internal server error");
  }
};

module.exports = get;
