const mongoose = require("mongoose");
const types = mongoose.Schema.Types;

const { encryptAES } = require(`${ global.paths.tools.helper }`);

const nameDetails = {
    type: String,
    require: true,
};

const ownerDetails = {
    type: types.ObjectId,
    //require: true,
    ref: "users",
};

const boardIdentifierDetails = {
    type: String,
};

const BoardSchema = mongoose.Schema({
    name: nameDetails,
    owner: ownerDetails,
    boardIdentifier: boardIdentifierDetails,
});

const insertBoardIdentifier = function(next){
    if(!this.isNew){
        return next();
    }

    this.boardIdentifier = encryptAES(this.id);
    next();
}

BoardSchema.pre("save", insertBoardIdentifier);

module.exports = mongoose.model("boards", BoardSchema);
