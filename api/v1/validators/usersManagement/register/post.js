const { IsValidEmail, IsValidPassword, IsUndefinedOrNull } = require(`${ global.paths.tools.validationTools }`);
const { VALIDATION_ERR } = require(`${ global.paths.tools.statusCodes }`);

const postValidator = (req, res, next) => {
    const { email, name, password } = req.body;

    if(IsUndefinedOrNull(email)){
        return res.responser(VALIDATION_ERR, "undefined field", { field: "email" });
    }

    if(IsUndefinedOrNull(name)){
        return res.responser(VALIDATION_ERR, "undefined field", { field: "name" });
    }

    if(IsUndefinedOrNull(password)){
        return res.responser(VALIDATION_ERR, "undefined field", { field: "password" });
    }

    if(!IsValidEmail(email)){
        return res.responser(VALIDATION_ERR, "wrong format", { field: "email" });
    }

    if(!IsValidPassword(password)){
        return res.responser(VALIDATION_ERR, "wrong format", { field: "password" });
    }

    next();
};

module.exports = postValidator;
