const jwt = require("jsonwebtoken");
const { INTERNAL_ERR, UNAUTHORIZED_ERR } = require(`${ global.paths.tools.statusCodes }`);

const jwtKey = global.env.SECRET_KEYS.JWT_SECRET_KEY;

const tokenUnpacker = (req, res, next) => {
    const { verificationToken } = req.params;
    jwt.verify(verificationToken, jwtKey, (err, data) => {
        if (err) {
            console.error(err);

            if(err.message === "jwt malformed" || err.message === "invalid token"){
                return res.responser(UNAUTHORIZED_ERR, "token is invalid");
            }

            if(err.message === "invalid signature"){
                return res.responser(UNAUTHORIZED_ERR, "there is no verification with this token");
            }

            return res.responser(INTERNAL_ERR, "internal server error");
        }

        if(data === null, data === undefined, data === {}){
            return res.responser(UNAUTHORIZED_ERR, "there is no verification with this token");
        }

        req.body.verificationDetails = data;

        next();
    });
};

module.exports = tokenUnpacker;
