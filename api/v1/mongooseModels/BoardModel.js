const mongoose = require("mongoose");
const types = mongoose.Schema.Types;

const { encryptAES } = require(`${ global.paths.tools.helper }`);

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

const insertBoardIdentifier = function(next){
    if(!this.isNew){
        return next();
    }

    const boardEncryptedId = encryptAES(this.id);
    this.boardIdentifier = btoa(boardEncryptedId);
    next();
}

BoardSchema.pre("save", insertBoardIdentifier);

module.exports = mongoose.model("boards", BoardSchema);
