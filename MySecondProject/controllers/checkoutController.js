const Checkout = require('../models/checkoutModel');

exports.process = async (req, res) => {
  const result = await Checkout.checkout(req.params.userId);
  res.json(result);
};

