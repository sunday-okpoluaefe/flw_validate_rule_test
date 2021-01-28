
/**
 * Rule routes
 */
const express = require('express');
const router = express.Router();
const middlewares = require('../providers/middlewares');
const { RuleController } = require('../providers/controllers');

router.get('/', middlewares.async(RuleController.get))
router.post('/validate-rule', middlewares.validate_request, middlewares.validate_rule, middlewares.async(RuleController.validate))

module.exports.RuleRoutes = router
