const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(global.env.GENERAL.SERVER_PORT, () => console.log(`listen on port ${ global.env.GENERAL.SERVER_PORT }`));
