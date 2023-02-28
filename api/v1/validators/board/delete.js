const { IsUndefinedOrNull } = require(`${ global.paths.tools.validationTools }`);

const deleteValidator = (req, res, next) => {
    const { id } = req.body;

    if(IsUndefinedOrNull(id)){
        return res.responser(VALIDATION_ERR, "undefined field", null, { field: "id" });
    }

    next();
};

module.exports = deleteValidator;
