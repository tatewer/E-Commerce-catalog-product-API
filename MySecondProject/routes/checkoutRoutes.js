const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutController');

router.post('/:userId', checkoutController.process);
module.exports = router;