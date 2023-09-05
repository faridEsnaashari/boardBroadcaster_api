const CryptoJS = require("crypto-js");
const AES = CryptoJS.AES;
const jwt = require("jsonwebtoken");

const JWTsecretKey = global.env.SECRET_KEYS.JWT_SECRET_KEY;
const AESsecretKey = global.env.SECRET_KEYS.AES_SECRET_KEY;

const generateRandomVerificationCode = (digit) => {
  let digitA = 1;
  let digitB = 9;
  for (let i = 1; i < digit; i++) {
    digitA *= 10;
    digitB *= 10;
  }
  return Math.floor(Math.floor(digitA + Math.random() * digitB)) + 1;
};

const encryptAES = (data) => {
  const encryptedData = AES.encrypt(data, AESsecretKey).toString();
  return encryptedData;
};

const decryptAES = (encryptedData) => {
  const dataBytes = AES.decrypt(encryptedData, AESsecretKey);
  const data = dataBytes.toString(CryptoJS.enc.Utf8);
  return data;
};

const createJWT = (payload) => {
  const tokenPromise = new Promise((resolve, reject) => {
    jwt.sign(payload, JWTsecretKey, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });

  return tokenPromise;
};

const unpackJWT = (token) => {
  const payloadPromise = new Promise((resolve, reject) => {
    jwt.verify(token, JWTsecretKey, (err, payload) => {
      if (err) {
        reject(err);
      }
      if ((payload === null, payload === undefined, payload === {})) {
        reject(new Error("there is no verification with this token"));
      }
      resolve(payload);
    });
  });

  return payloadPromise;
};

module.exports = {
  generateRandomVerificationCode,
  encryptAES,
  decryptAES,
  createJWT,
  unpackJWT,
};
