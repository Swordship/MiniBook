const {express} = require('express');
const routes = express.Router();
const {register} = require('../controllers/authController');

routes.post('/register', register);

module.exports = routes;
