const routes = require('express').Router();
const user = require('./User/route');

routes.use(user);

module.exports = routes;
