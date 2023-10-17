const { SUCCESS_MSG } = require(`${global.paths.tools.statusCodes}`);

const getController = async (req, res) => {
  res.cookie("userToken", "", {
    httpOnly: true,
    secure: true,
  });

  return res.responser(SUCCESS_MSG, "loged out successfully");
};

module.exports = getController;
