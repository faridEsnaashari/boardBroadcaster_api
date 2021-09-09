const { UNAUTHORIZED_ERR } = require(`${ global.paths.tools.statusCodes }`);
const { unpackJWT } = require(`${ global.paths.tools.helper }`);

const isAuthorized = async(req, res, next) => {
    const userToken = req.headers.authorization;

    if(!userToken){
        return res.responser(
            UNAUTHORIZED_ERR, 
            "An authorization should provied in the header of the request to access this resource",
            null,
            { requiredHeader: "authorization" },
        );
    }

    try{
        const user = await unpackJWT(userToken);
        req.authorization = { user };
        next();
    }
    catch(err){
        return res.responser(UNAUTHORIZED_ERR, "Authorization token is invalid");
    }
}

module.exports = isAuthorized;
