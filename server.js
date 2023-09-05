const http = require("http");
const app = require("./app");
const Socket = require("./api/socket/socket");

const server = http.createServer(app);

const socketIo = new Socket(server, {
  cors: {
    origin: global.env.SOCKET.CORS.ORIGIN,
  },
});

server.listen(global.env.GENERAL.SERVER_PORT, () =>
  console.log(`listen on port ${global.env.GENERAL.SERVER_PORT}`),
);
