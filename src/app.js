
require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 4000;
const cors = require('cors');
const config = require('config');

const middlewares = require('./api/providers/middlewares');
// * set socket connection on express

//attach respond helper
app.use(middlewares.respond);
const router = require('./api/router');

app.use(cors()) //attach cors header middleware

app.set('trust proxy', true);

app.use(express.json()); //attach the express json middleware
app.use(config.get('api.basePath'), router); //atach API router

app.use(middlewares.error.catch); //attach error middleware to catch internal server errors
app.use(middlewares.error.notFound); //attach error middleware to catch 404 errors

http.listen(port, ()=> {
    console.log(`App started. listening at port: ${port}`);
});


module.exports = app;
