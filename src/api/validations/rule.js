
/**
 * Rule request validation schemas
 */
const Joi = require('@hapi/joi');

module.exports = {
    'post:/validate-rule' : Joi.object({
        rule: Joi.object({
            field: Joi.string().required(),
            condition: Joi.string().required(),
            condition_value: Joi.any().required(),
        }).required().messages({
            'object.base': `"rule" should be an 'object.'`,
            'any.required': `"rule" is required.`
        }),
        data: Joi.any().required()
    })
}
