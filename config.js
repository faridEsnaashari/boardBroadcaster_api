const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const env = {
    GENERAL: {
        ROOT_ENDPOINT: process.env.ROOT_ENDPOINT,
        NODE_ENV: process.env.NODE_ENV,
        SERVER_PORT: process.env.PORT
    },
    MONGOOSE: {
        MONGOOSE_URL: process.env.MONGOOSE_URL,
        DATABASE_NAME: process.env.DATABASE_NAME,
    },
    SECRET_KEYS: {
        AES_SECRET_KEY: process.env.AES_SECRET_KEY,
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    },
};

const paths = {
    middlewares: {
        responser: path.resolve("./api/middlewares/responser"),
    },
    tools: {
        mongooseConnector: path.resolve("./api/tools/mongooseConnector"),
        rendomVerificationCodeGenerator: path.resolve("./api/tools/randomVerifationCodeGenerator"),
        validationTools: path.resolve("./api/tools/validationTools"),
    },
    v1: {
        path: path.resolve("./api/v1/v1"),
        controllers: {
            register: path.resolve("./api/v1/controllers/usersManagement/register"),
        },
        validators: {
            register: path.resolve("./api/v1/validators/usersManagement/register"),
        },
        routes: {
            register: path.resolve("./api/v1/routes/usersManagement/register"),
        },
        models: {
            User: path.resolve("./api/v1/mongooseModels/UserModel"),
        },
    },
};

module.exports.env = env;
module.exports.paths = paths;
