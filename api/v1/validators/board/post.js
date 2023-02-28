const { IsUndefinedOrNull } = require(`${ global.paths.tools.validationTools }`);
const { VALIDATION_ERR } = require(`${ global.paths.tools.statusCodes }`);

const postValidator = (req, res, next) => {
    const { name } = req.body;

    if(IsUndefinedOrNull(name)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "name" });
    }

    next();
};

module.exports = postValidator;
