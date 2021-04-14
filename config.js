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
    },
};

const paths = {
    middlewares: {
        responser: path.resolve("./api/middlewares/responser"),
    },
    tools: {
        mongooseConnector: path.resolve("./api/tools/mongooseConnector"),
    },
    v1: {
        path: path.resolve("./api/v1/v1"),
        controllers: {
            register: path.resolve("./api/v1/controllers/usersManagement/register"),
        },
        routes: {
            register: path.resolve("./api/v1/routes/usersManagement/register"),
        },
    },
};

module.exports.env = env;
module.exports.paths = paths;
