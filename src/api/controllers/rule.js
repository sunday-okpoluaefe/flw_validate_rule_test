
const _ = require('lodash');

let controller = {}

controller.get = async ( req, res, next) => {

    return req.respond.ok({
        "message": "My Rule-Validation API",
        "status": "success",
        "data": {
            "name": "Sunday Okpoluaefe",
            "github": "@sunday-okpoluaefe",
            "email": "sunday.okpoluaefe@gmail.com",
            "mobile": "08051525444",
            "twitter": ""
        }
    })

}

controller.apply_rule = ( rule, value ) => {

    /*
     i/ eq: Means the field value should be equal to the condition value
    ii/ neq: Means the field value should not be equal to the condition value
    iii/ gt: Means the field value should be greater than the condition value
    iv/ gte: Means the field value should be greater than or equal to the condition value
    v/ contains: Means the field value should contain the condition value
     */
    switch (rule.condition) {
        case 'et': return value === rule.condition_value
        case 'neq': return value !== rule.condition_value
        case 'gt': return value > rule.condition_value
        case 'gte': return value >= rule.condition_value
        case 'contains': return value.includes(rule.condition_value)
        default: return false
    }
}

controller.validate = async ( req, res, next) => {

    const { rule, data } = req.body
    const value = _.get(data, rule.field)
    const result = (controller.apply_rule(rule, value))

    const response = {
        message: result ? `field ${rule.field} successfully validated.` : `field ${rule.field} failed validation.`,
        status: result ? "success" : "error",
        data: {
            "validation": {
                error: !result,
                field: rule.field,
                field_value: value,
                condition: rule.condition,
                condition_value: rule.condition_value
            }
        }
    }

    return result ? req.respond.ok(response) : req.respond.badRequest(response)

}

module.exports.RuleController = controller
