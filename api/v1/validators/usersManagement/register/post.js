const { IsValidEmail, IsValidPassword, IsUndefinedOrNull } = require(`${ global.paths.tools.validationTools }`);

const postValidator = (req, res, next) => {
    const { email, name, password } = req.body;

    if(IsUndefinedOrNull(email)){
        res.responser(400, "undefined field", { field: "email" });
    }

    if(IsUndefinedOrNull(name)){
        res.responser(400, "undefined field", { field: "name" });
    }

    if(IsUndefinedOrNull(password)){
        res.responser(400, "undefined field", { field: "password" });
    }

    if(!IsValidEmail(email)){
        res.responser(400, "wrong format", { field: "email" });
    }

    if(!IsValidPassword(password)){
        res.responser(400, "wrong format", { field: "password" });
    }

    next();
};

module.exports = postValidator;
