/**
 * Middleware for catching 404 and internal server errors
 */
const { logger } = require('../../config/logger');

const error =  {}

error.catch = (err, req, res, next) => {
    console.log("Caught error");
    if(err.statusCode && err.statusCode === 400)
        return req.respond.badRequest(err.message);

    logger.error(err.message, err);
    req.respond.internalError()
}

error.notFound = (req, res, next) => {
    req.respond.notFound()
}

module.exports.error = error
