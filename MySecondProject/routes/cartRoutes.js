const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add', cartController.add);
router.delete('/remove', cartController.remove);
router.get('/:userId', cartController.getUserCart);

module.exports = router;
