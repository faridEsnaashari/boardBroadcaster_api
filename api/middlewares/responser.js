const send = function (statusCode, message, data, additionalInformation){
    const responseJson = {
        status: statusCode,
        success: (statusCode >= 200 && statusCode < 300),
        message,
        data,
        ...additionalInformation,
    };
    this.status(responseJson.status).json(responseJson);
};

module.exports =() => {
    return function (req, res, next){
        res.responser = send;
        next();
    };
};
