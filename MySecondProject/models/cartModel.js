const db = require('../db');

exports.addToCart = ({ userId, productId, quantity }) => {
  return db.query(
    `INSERT INTO carts (user_id, product_id, quantity)
     VALUES ($1, $2, $3) 
     ON CONFLICT (user_id, product_id)
     DO UPDATE SET quantity = carts.quantity + $3
     RETURNING *`,
    [userId, productId, quantity]
  );
};

exports.removeFromCart = ({ userId, productId }) => {
  return db.query('DELETE FROM carts WHERE user_id = $1 AND product_id = $2', [userId, productId]);
};

exports.getCart = async (userId) => {
  const result = await db.query(
    `SELECT p.id, p.name, p.price, c.quantity,
            (p.price * c.quantity) as subtotal
     FROM carts c
     JOIN products p ON c.product_id = p.id
     WHERE c.user_id = $1`,
    [userId]
  );
  const total = result.rows.reduce((sum, item) => sum + item.subtotal, 0);
  return { items: result.rows, total };
};