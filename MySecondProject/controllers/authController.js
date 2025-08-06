const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = async (req, res) => {
  const { rows } = await User.register(req.body);
  res.json(rows[0]);
};

exports.login = async (req, res) => {
  try {
    const user = await User.login(req.body);
    const token = jwt.sign(user, 'secretkey');
    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};