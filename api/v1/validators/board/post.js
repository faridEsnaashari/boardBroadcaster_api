const { IsUndefinedOrNull } = require(`${ global.paths.tools.validationTools }`);
const { VALIDATION_ERR } = require(`${ global.paths.tools.statusCodes }`);

const postValidator = (req, res, next) => {
    const { name, color } = req.body;

    if(IsUndefinedOrNull(name)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "name" });
    }

    if(IsUndefinedOrNull(color)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "color" });
    }

    next();
};

module.exports = postValidator;
