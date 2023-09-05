const { client: redisClient } = require(`${global.paths.tools.redisConnector}`);

const addOrModifyShape = async (shape, room) => {
  try {
    const shapes = await redisClient.get(room);

    if (!shape) {
      return await redisClient.set(room, JSON.stringify([shape]));
    }

    let shapeWasExists = false;

    updatedShapes = JSON.parse(shapes).map((storedShape) => {
      if (!(storedShape.name === shape.name)) {
        return storedShape;
      }

      shapeWasExists = true;
      return shape;
    });

    await redisClient.set(
      room,
      JSON.stringify(
        shapeWasExists ? updatedShapes : [...updatedShapes, shape],
      ),
    );
  } catch (err) {
    console.error(err);
  }
};

const getRoomsShapes = async (room) => {
  try {
    shapes = await redisClient.get(room);
    return JSON.parse(shapes);
  } catch (err) {
    console.error(err);
  }
};

const deleteAShapeOfRoom = async (room, shape) => {
  try {
    const shapes = await redisClient.get(room);

    if (!shapes) {
      return [];
    }

    const updatedShapes = JSON.parse(shapes).map((storedShape) =>
      storedShape.name === shape.name ? shape : storedShape,
    );

    await redisClient.set(room, JSON.stringify(updatedShapes));
  } catch (err) {
    console.error(err);
  }
};

const deleteAllShapesOfRoom = async (room, shapes) => {
  try {
    await redisClient.set(room, JSON.stringify(shapes));
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addOrModifyShape,
  getRoomsShapes,
  deleteAShapeOfRoom,
  deleteAllShapesOfRoom,
};
