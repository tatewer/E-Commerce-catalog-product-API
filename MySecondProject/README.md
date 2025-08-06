# E-Commerce Product Catalog API

Backend API for managing product catalog, shopping cart and checkout logic. Built with Express.js and PostgreSQL.



## Endpoints

/products  
POST - create product  
GET - list products  
GET /:id - get one  
PUT /:id - update  
DELETE /:id - remove  

/cart  
POST /add - add to cart  
DELETE /remove - remove from cart  
GET /:userId - get user cart  

/checkout/:userId  
POST - simulate checkout



## Run

`bash
npm install
node server.js