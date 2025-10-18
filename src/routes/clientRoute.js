const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, clientController.createClient);

module.exports = router;