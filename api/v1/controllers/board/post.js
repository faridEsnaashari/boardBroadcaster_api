const { BoardModel } = require(`${global.paths.v1.mongooseModels}`);
const { INTERNAL_ERR, SUCCESS_CREATE_MSG } = require(
  `${global.paths.tools.statusCodes}`
);

const post = async (req, res) => {
  const { name, color } = req.body;

  const user = req.authorization.user;

  const newBoard = new BoardModel({
    name,
    color,
    owner: user,
  });

  try {
    const board = await newBoard.save();
    const { verificationCode, verified, password, ...owner } =
      board.owner.toObject();

    res.responser(SUCCESS_CREATE_MSG, "board has been created successfully", {
      ...board.toObject(),
      owner,
    });
  } catch (err) {
    console.error(err);
    res.responser(INTERNAL_ERR, "internal server error");
  }
};

module.exports = post;
