const Product = require('../models/productModel');

exports.create = async (req, res) => {
  const { rows } = await Product.createProduct(req.body);
  res.json(rows[0]);
};

exports.list = async (req, res) => {
  const { rows } = await Product.getAllProducts();
  res.json(rows);
};

exports.get = async (req, res) => {
  const { rows } = await Product.getProductById(req.params.id);
  res.json(rows[0]);
};

exports.update = async (req, res) => {
  const { rows } = await Product.updateProduct(req.params.id, req.body);
  res.json(rows[0]);
};

exports.remove = async (req, res) => {
  await Product.deleteProduct(req.params.id);
  res.sendStatus(204);
};