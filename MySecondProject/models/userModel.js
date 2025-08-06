const db = require('../db');
const bcrypt = require('bcrypt');

exports.register = async ({ email, password }) => {
  const hash = await bcrypt.hash(password, 10);
  return db.query(
    'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
    [email, hash]
  );
};

exports.login = async ({ email, password }) => {
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = result.rows[0];
  if (user && await bcrypt.compare(password, user.password)) {
    return { id: user.id, email: user.email };
  }
  throw new Error('Invalid credentials');
};