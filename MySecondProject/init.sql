CREATE DATABASE ecommerce;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price NUMERIC,
  category TEXT,
  stock INTEGER,
  description TEXT
);

CREATE TABLE carts (
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  PRIMARY KEY(user_id, product_id)
);

CREATE DATABASE ecommerce;
