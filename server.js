const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("./routes/usersRouter");
const prisonerRouter = require("./routes/prisonerRouter");

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.use("/api/users", usersRouter);

server.use("/api/prisoners", prisonerRouter);

module.exports = server;
