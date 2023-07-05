global.env = require('./config').env;

global.paths = require('./config').paths;

const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const responser = require(`${ global.paths.middlewares.responser }`);
const mongooseConnector = require(`${ global.paths.tools.mongooseConnector }`);
const redisConnector = require(`${ global.paths.tools.redisConnector }`).connect();

const v1 = require(`${ global.paths.v1.path }`);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(responser());

app.use("/v1", v1);
app.use("/", v1);

app.use((req, res) => {
    res.responser(404, "wrong route or method");
});

module.exports = app;
