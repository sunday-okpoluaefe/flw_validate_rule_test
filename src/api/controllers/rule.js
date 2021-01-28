
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

controller.validate = async ( req, res, next) => {

}

module.exports.RuleController = controller
