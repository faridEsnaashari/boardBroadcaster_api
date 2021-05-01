const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const env = {
    GENERAL: {
        ROOT_ENDPOINT: process.env.ROOT_ENDPOINT,
        NODE_ENV: process.env.NODE_ENV,
        SERVER_PORT: process.env.PORT,
        APP_URL: process.env.APP_URL,
    },
    MONGOOSE: {
        MONGOOSE_URL: process.env.MONGOOSE_URL,
        DATABASE_NAME: process.env.DATABASE_NAME,
    },
    SECRET_KEYS: {
        AES_SECRET_KEY: process.env.AES_SECRET_KEY,
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    },
    GMAIL: {
        GMAIL_ID: process.env.GMAIL_ID,
        GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
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
        nodemailer: path.resolve("./api/tools/nodeMailer"),
    },
    v1: {
        path: path.resolve("./api/v1/v1"),
        mongooseModels: path.resolve("./api/v1/mongooseModels/models"),
        controllers: {
            register: path.resolve("./api/v1/controllers/usersManagement/register"),
        },
        validators: {
            register: path.resolve("./api/v1/validators/usersManagement/register"),
        },
        routes: {
            register: path.resolve("./api/v1/routes/usersManagement/register"),
        },
    },
};

module.exports.env = env;
module.exports.paths = paths;
