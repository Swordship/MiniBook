const {express} = require('express');
const routes = express.Router();
const {register} = require('../controllers/authController');
const {login} = require('../controllers/authController');

routes.post('/register', register);

routes.post('/login', login);

module.exports = routes;
