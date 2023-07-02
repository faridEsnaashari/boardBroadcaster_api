const { Server: SocketIo } = require("socket.io");

const Socket = class {
    #_socketIo = null;

    constructor(server, options){
        this.#_socketIo = new SocketIo(server, options);

        this.#_socketIo.on("connection", socket => {
            socket.on("joinToRoom", boardIdentifier => this.#joinToRoom(socket, boardIdentifier));
            socket.on("draw", (shape, boardIdentifier) => this.#sendShape(shape, boardIdentifier));
            socket.on("allShapes", (shapes, boardIdentifier) => this.#initShapes(shapes, boardIdentifier));
            socket.on("deleteShape", (shape, boardIdentifier) => this.#deleteShape(shape, boardIdentifier));
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

    #sendShape(shape, boardIdentifier){
        this.#_socketIo.to(boardIdentifier).emit("newShape", shape);
    }

    #deleteShape(shape, boardIdentifier){
        this.#_socketIo.to(boardIdentifier).emit("deleteShape", shape);
    }

    #initShapes(shapes, boardIdentifier){
        this.#_socketIo.to(boardIdentifier).emit("initShapes", shapes);
    }
};

module.exports = Socket;
