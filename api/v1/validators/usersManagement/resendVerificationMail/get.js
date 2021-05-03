const { IsValidEmail, IsUndefinedOrNull } = require(`${ global.paths.tools.validationTools }`);
const { VALIDATION_ERR } = require(`${ global.paths.tools.statusCodes }`);

const getValidator = (req, res, next) => {
    const { email } = req.query;

    if(IsUndefinedOrNull(email)){
        return res.responser(VALIDATION_ERR, "undefined field", { field: "email" });
    }

    if(!IsValidEmail(email)){
        return res.responser(VALIDATION_ERR, "wrong format", { field: "email" });
    }

    next();
};

module.exports = getValidator;
