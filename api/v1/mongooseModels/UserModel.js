const mongoose = require("mongoose");
const types = mongoose.Schema.Types;
const { generateRandomVerificationCode, encryptAES, decryptAES, createJWT } = require(`${ global.paths.tools.helper }`);

const nameDetails = {
    type: String,
    required: true,
};

const emailDetails = {
    type: String,
    required: true,
    unique: true,
};

const verificationCodeDetails = {
    type: Number,
    required: true,
};

const verifiedDetails = {
    type: Boolean,
    default: false,
};

const passwordDetails = {
    type: String,
    required: true,
};

const UserSchema = mongoose.Schema({
    name: nameDetails,
    email: emailDetails,
    password: passwordDetails,
    verificationCode: verificationCodeDetails,
    verified: verifiedDetails,
});

const addVerificationCode = function(){
    this.verificationCode = generateRandomVerificationCode(6);
};

const getVerificationToken = function(payload){
    return createJWT(payload);
};

const checkPassword = function(password){
    return decryptAES(this.password) === password;
};

const encryptPassword = function (next) {
    if(!this.isModified("password")){
        return next();
    }

    this.password = encryptAES(this.password);

    next();
};

UserSchema.methods.addVerificationCode = addVerificationCode;
UserSchema.methods.getVerificationToken = getVerificationToken;
UserSchema.methods.checkPassword = checkPassword;

UserSchema.pre("save", encryptPassword);

module.exports = mongoose.model("users", UserSchema);
