const express = require("express");
const router = express.Router();

const postController = require(`${ global.paths.v1.controllers.board }/post`);
const putController = require(`${ global.paths.v1.controllers.board }/put`);
const deleteController = require(`${ global.paths.v1.controllers.board }/delete`);
const getController = require(`${ global.paths.v1.controllers.board }/get`);
const getByIdentifierController = require(`${ global.paths.v1.controllers.board }/getByIdentifier`);

const postValidator = require(`${ global.paths.v1.validators.board }/post`);
const putValidator = require(`${ global.paths.v1.validators.board }/put`);
const deleteValidator = require(`${ global.paths.v1.validators.board }/delete`);
const getValidator = require(`${ global.paths.v1.validators.board }/get`);
const getByIdentifierValidator = require(`${ global.paths.v1.validators.board }/getByIdentifier`);

const isAuthorized = require(`${ global.paths.v1.validators.isAuthorized }`);

router.post("/", isAuthorized, postValidator, postController);
router.put("/:id", isAuthorized, putValidator, putController);
router.delete("/:id", isAuthorized, deleteValidator, deleteController);
router.get("/:id", isAuthorized, getValidator, getController);
router.get("/identifier/:id", getByIdentifierValidator, getByIdentifierController);

module.exports = router;
