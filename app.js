global.env = require("./config").env;

global.paths = require("./config").paths;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const responser = require(`${global.paths.middlewares.responser}`);
const cookieParser = require("cookie-parser");
require(`${global.paths.tools.mongooseConnector}`);
require(`${global.paths.tools.redisConnector}`).connect();

const v1 = require(`${global.paths.v1.path}`);
const v2 = require(`${global.paths.v2.path}`);

const app = express();

app.use(
  cors({
    credentials: true,
    origin: [global.env.GENERAL.APP_URL],
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(responser());

app.use("/v2", v2);
app.use("/v1", v1);
app.use("/", v1);

app.use((req, res) => {
  res.responser(404, "wrong route or method");
});

module.exports = app;
