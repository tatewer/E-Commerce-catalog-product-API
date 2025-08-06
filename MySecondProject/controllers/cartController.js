const Cart = require('../models/cartModel');

exports.add = async (req, res) => {
  const { rows } = await Cart.addToCart(req.body);
  res.json(rows[0]);
};

exports.remove = async (req, res) => {
  await Cart.removeFromCart(req.body);
  res.sendStatus(204);
};

exports.getUserCart = async (req, res) => {
  const cart = await Cart.getCart(req.params.userId);
  res.json(cart);
};
