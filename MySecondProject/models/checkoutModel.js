const db = require('../db');

exports.checkout = async (userId) => {
  const cartItems = await db.query(
    `SELECT * FROM carts WHERE user_id = $1`, [userId]
  );

  for (const item of cartItems.rows) {
    await db.query(
      `UPDATE products SET stock = stock - $1 WHERE id = $2`,
      [item.quantity, item.product_id]
    );
  }

  await db.query(`DELETE FROM carts WHERE user_id = $1`, [userId]);
  return { message: 'Order placed successfully' };
};