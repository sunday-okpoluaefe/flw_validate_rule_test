/**
 * Router
 */

const express = require('express');
const app = express();

const {
RuleRoutes,
} = require('./providers/routes');

app.use('/', RuleRoutes)

module.exports = app;
