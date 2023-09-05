const { Server: SocketIo } = require("socket.io");
const ShapeRedisModel = require(`${global.paths.v1.redisModels.shapeModel}`);

const Socket = class {
  #_socketIo = null;

  constructor(server, options) {
    this.#_socketIo = new SocketIo(server, options);

    this.#_socketIo.on("connection", (socket) => {
      socket.on("joinToRoom", (boardIdentifier) =>
        this.#joinToRoom(socket, boardIdentifier),
      );
      socket.on("draw", (shape) => this.#sendShape(socket, shape));
      socket.on("deleteShape", (shape) => this.#deleteAShape(socket, shape));
      socket.on("deleteAllShapes", (shapes) =>
        this.#deleteAllShapes(socket, shapes),
      );
    });
  }

  async #joinToRoom(socket, boardIdentifier) {
    socket.join(boardIdentifier);

    const shapes = await ShapeRedisModel.getRoomsShapes(boardIdentifier);
    if (shapes) {
      socket.emit("initShapes", shapes);
    }
  }

  #sendShape(socket, shape) {
    const room = this.#getRoom(socket);
    ShapeRedisModel.addOrModifyShape(shape, room);
    this.#_socketIo.to(room).emit("newShape", shape);
  }

  #deleteAShape(socket, shape) {
    const room = this.#getRoom(socket);
    ShapeRedisModel.deleteAShapeOfRoom(room, shape);
    this.#_socketIo.to(room).emit("deleteShape", shape);
  }

  #deleteAllShapes(socket, shapes) {
    const room = this.#getRoom(socket);
    ShapeRedisModel.deleteAllShapesOfRoom(room, shapes);
    this.#_socketIo.to(room).emit("initShapes", shapes);
  }

  #getRoom(socket) {
    const [, room] = socket.rooms;
    return room;
  }
};

module.exports = Socket;
