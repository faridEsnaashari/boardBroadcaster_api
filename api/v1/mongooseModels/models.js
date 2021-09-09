const UserModel = require('./UserModel');
const BoardModel = require('./BoardModel');

const initiateModels = async() => {
    try{
        await UserModel.init();
        await BoardModel.init();
    }
    catch(err){
        console.error(err);
    }
};

module.exports = {
    UserModel,
    BoardModel,
    initiateModels,
};
