const { Server: SocketIo } = require("socket.io");

const Socket = class {
    #_socketIo = null;

    constructor(server, options){
        this.#_socketIo = new SocketIo(server, options);

        this.#_socketIo.on("connection", socket => {
            socket.on("joinToRoom", boardIdentifier => this.#joinToRoom(socket, boardIdentifier));
            socket.on("draw", shape => this.#sendShape(socket, shape));
            socket.on("allShapes", shapes => this.#initShapes(socket, shapes));
            socket.on("deleteShape", shape => this.#deleteShape(socket, shape));
        });
    }

    async #joinToRoom(socket, boardIdentifier){
        socket.join(boardIdentifier);

        const socketsInTheRoom = await this.#_socketIo.in(boardIdentifier).fetchSockets();

        if(socketsInTheRoom.length <= 1){
            return;
        }

        socketsInTheRoom[0].emit("getAllShapes");
    }

    #sendShape(socket, shape){
        const room = this.#getRoom(socket);
        this.#_socketIo.to(room).emit("newShape", shape);
    }

    #deleteShape(socket, shape){
        const room = this.#getRoom(socket);
        this.#_socketIo.to(room).emit("deleteShape", shape);
    }

    #initShapes(socket, shapes){
        const room = this.#getRoom(socket);
        this.#_socketIo.to(room).emit("initShapes", shapes);
    }

    #getRoom(socket){
        const [, room] = socket.rooms;
        return room;
    }
};

module.exports = Socket;
