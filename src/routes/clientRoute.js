const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authenticate = require('../middleware/authMiddleware');

router.post('/createClients', authenticate, clientController.createClient);

router.get('/getClients',authenticate, clientController.getAllClients);

router.put('/updateClient',authenticate, clientController.updateClient);

module.exports = router;