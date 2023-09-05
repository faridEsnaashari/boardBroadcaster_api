const { createClient } = require("redis");

const client = createClient({ url: global.env.REDIS.CONNECTION_CONFIG });

client.on("error", (err) => console.error(err));

const connect = () => {
  client.connect().then(() => {
    console.log("###############################");
    console.log("Redis connected successfully");
    console.log("###############################");
  });
};

module.exports = {
  client,
  connect,
};
