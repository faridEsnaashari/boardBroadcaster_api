const mongoose = require("mongoose");
const { nanoid } = require("nanoid/non-secure");

const types = mongoose.Schema.Types;

const nameDetails = {
  type: String,
  require: true,
};

const ownerDetails = {
  type: types.ObjectId,
  require: true,
  ref: "users",
};

const boardIdentifierDetails = {
  type: String,
};

const colorDetails = {
  type: String,
  require: true,
};

const BoardSchema = mongoose.Schema({
  name: nameDetails,
  owner: ownerDetails,
  boardIdentifier: boardIdentifierDetails,
  color: colorDetails,
});

const insertBoardIdentifier = function (next) {
  if (!this.isNew) {
    return next();
  }

  this.boardIdentifier = nanoid();
  next();
};

BoardSchema.pre("save", insertBoardIdentifier);

module.exports = mongoose.model("boards", BoardSchema);
