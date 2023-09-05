const dotenv = require("dotenv");
const path = require("path");
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
  SOCKET: {
    CORS: {
      ORIGIN: process.env.SOCKET_CORS_ORIGIN,
    },
  },
  REDIS: {
    CONNECTION_CONFIG: process.env.REDIS_CONNECTION_CONFIG,
  },
};

const paths = {
  middlewares: {
    responser: path.resolve("./api/middlewares/responser"),
    tokenUnpacker: path.resolve("./api/middlewares/tokenUnpacker"),
  },
  tools: {
    mongooseConnector: path.resolve("./api/tools/mongooseConnector"),
    helper: path.resolve("./api/tools/helper"),
    validationTools: path.resolve("./api/tools/validationTools"),
    nodemailer: path.resolve("./api/tools/nodeMailer"),
    statusCodes: path.resolve("./api/tools/statusCodes"),
    mongoErrors: path.resolve("./api/tools/mongoErrors"),
    redisConnector: path.resolve("./api/tools/redisConnector"),
  },
  v1: {
    path: path.resolve("./api/v1/v1"),
    mongooseModels: path.resolve("./api/v1/mongooseModels/models"),
    redisModels: {
      shapeModel: path.resolve("./api/v1/redisModels/ShapesModel"),
    },
    controllers: {
      register: path.resolve("./api/v1/controllers/usersManagement/register"),
      board: path.resolve("./api/v1/controllers/board"),
      resendVerificationMail: path.resolve(
        "./api/v1/controllers/usersManagement/resendVerificationMail",
      ),
      verifyEmail: path.resolve(
        "./api/v1/controllers/usersManagement/verifyEmail",
      ),
      login: path.resolve("./api/v1/controllers/usersManagement/login"),
      user: path.resolve("./api/v1/controllers/usersManagement/user"),
    },
    validators: {
      register: path.resolve("./api/v1/validators/usersManagement/register"),
      board: path.resolve("./api/v1/validators/board"),
      resendVerificationMail: path.resolve(
        "./api/v1/validators/usersManagement/resendVerificationMail",
      ),
      login: path.resolve("./api/v1/validators/usersManagement/login"),
      isAuthorized: path.resolve("./api/v1/validators/isAuthorized"),
    },
    routes: {
      register: path.resolve("./api/v1/routes/usersManagement/register"),
      board: path.resolve("./api/v1/routes/board"),
      resendVerificationMail: path.resolve(
        "./api/v1/routes/usersManagement/resendVerificationMail",
      ),
      verifyEmail: path.resolve("./api/v1/routes/usersManagement/verifyEmail"),
      login: path.resolve("./api/v1/routes/usersManagement/login"),
      user: path.resolve("./api/v1/routes/usersManagement/user"),
    },
  },
};

module.exports.env = env;
module.exports.paths = paths;
