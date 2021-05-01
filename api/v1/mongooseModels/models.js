const UserModel = require('./UserModel');

const initiateModels = async() => {
    try{
        await UserModel.init();
    }
    catch(err){
        console.error(err);
    }
};

module.exports = {
    UserModel,
    initiateModels,
};
