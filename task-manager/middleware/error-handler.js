const { CustomAPIError } = require('../errors/custom-error');


const errorHandlerMiddlerware = (err, req, res, next) => {
    console.log("Error in errorHandlerMiddlerware:", err instanceof CustomAPIError);
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: 'something went wrong' });
};

module.exports = errorHandlerMiddlerware;