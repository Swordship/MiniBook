const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');
const authMiddleware = require('../middleware/authMiddleware');

const {createInvoice, updateInvoice} = require('../schema/invoiceSchema');
const validate = require('../middleware/validateMiddleware');

router.post('/createInvoice',authMiddleware, validate(createInvoice), invoiceController.createInvoice);

router.put('/updateInvoice/:id',authMiddleware, validate(updateInvoice), invoiceController.updateInvoice);  

module.exports = router;