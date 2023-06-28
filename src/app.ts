import express from 'express';
import products from './controllers/products';
import orders from './controllers/order';
import user from './controllers/user';

const app = express();

app.use(express.json());

app.post('/products', products.registeringProducts);

app.get('/products', products.getingProducts);

app.get('/orders', orders.getingOrders);

app.post('/login', user.loginAccount);

export default app;
