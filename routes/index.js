const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/kofi', lesson1Controller.kofiRoute);
routes.get('/', lesson1Controller.akosahRoute);
routes.get('/kwame', lesson1Controller.kwameRoute);

module.exports = routes;