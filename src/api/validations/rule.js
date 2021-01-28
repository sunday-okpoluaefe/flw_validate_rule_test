
/**
 * Rule request validation schemas
 */
const Joi = require('@hapi/joi');

module.exports = {
    'post:/validate-rule' : Joi.object({
        rule: Joi.object({
            field: Joi.string().required(),
            condition: Joi.string().required(),
            condition_value: Joi.number().min(0).required(),
        }).required(),
        data: Joi.any().required()
    })
}
