const Schemas = require('../providers/validations');
const validation = require('../services/validation');
const config = require('config');
const _ = require('lodash');
const { SetErrorData} = require('../providers/helpers');

/**
 * Factory middleware function to validate Joi Schema
 * @returns {Function}
 * @param req
 * @param res
 * @param next
 */
module.exports.validate_rule = async (req, res, next) => {

    const { rule , data } = req.body
    const value = _.get(data, rule.field)

    if(value === undefined) return req.respond.badRequest({
        message: `field ${rule.field} is missing from data.`,
        "status": "error",
        "data": null
    })

    next();
}

/**
 * Validate request middleware
 */
module.exports.validate_request = (req, res, next) => {
    let route = `${req.method.toLowerCase()}:${req.baseUrl.replace(config.get('api.basePath'), '')}${req.route.path}`;
    route = route.replace(/\/+$/, '');
    if(!_.has(Schemas, route)) return next();
    const schema = _.get(Schemas, route);

    validate_schema_request(schema, req, res, next);
}

/**
 * Validate request schema
 */
validate_schema_request = (schema, req, res, next) => {

    const { error, value } = validation.validate(schema, req.body);

    if(error) {
        req.respond.badRequest(validation.parse_error_single(error));
        return error;
    }
    else req.body = value;
    next();
}

