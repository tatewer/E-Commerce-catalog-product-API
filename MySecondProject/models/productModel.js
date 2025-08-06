const db = require('../db');

exports.createProduct = ({ name, price, category, stock, description }) => {
  return db.query(
    'INSERT INTO products (name, price, category, stock, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, price, category, stock, description]
  );
};

exports.getAllProducts = () => db.query('SELECT * FROM products');
exports.getProductById = (id) => db.query('SELECT * FROM products WHERE id = $1', [id]);
exports.updateProduct = (id, data) => {
  const { name, price, category, stock, description } = data;
  return db.query(
    'UPDATE products SET name=$1, price=$2, category=$3, stock=$4, description=$5 WHERE id=$6 RETURNING *',
    [name, price, category, stock, description, id]
  );
};
exports.deleteProduct = (id) => db.query('DELETE FROM products WHERE id = $1', [id]);