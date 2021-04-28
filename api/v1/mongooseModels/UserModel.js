const mongoose = require("mongoose");
const types = mongoose.Schema.Types;
const CryptoJS = require("crypto-js");
const AES = CryptoJS.AES;
const jwt = require("jsonwebtoken");
const generateRandomVerificationCode = require(`${ global.paths.tools.rendomVerificationCodeGenerator }`);

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
    const secretKey = global.env.SECRET_KEYS.JWT_SECRET_KEY;
    return jwt.sign(payload, secretKey);
};

const encryptPassword = function(next){
    const secretKey = global.env.SECRET_KEYS.AES_SECRET_KEY;
    const originPassword = this.password;
    const hashedPassword = AES.encrypt(originPassword, secretKey).toString();

    this.password = hashedPassword;

    next();
};

UserSchema.methods.addVerificationCode = addVerificationCode;
UserSchema.methods.getVerificationToken = getVerificationToken;

UserSchema.pre("save", encryptPassword);

module.exports = mongoose.model("users", UserSchema);
