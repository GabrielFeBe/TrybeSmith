import { Request, Response } from 'express';
import errorHandler from '../middlewares/errorHandles';
import productsService from '../services/products';

async function registeringProducts(req: Request, res:Response):Promise<Response> {
  const { name, price } = req.body;
  if (!price) return res.status(400).json({ message: '"price" is required' });
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const response = await productsService.registeringProducts(req.body);
  if (response.status === 'SUCESS_1') {
    const { orderId, ...outOrderId } = response.message.dataValues;
    return res.status(errorHandler(response.status)).json(outOrderId);
  }
  return res.status(errorHandler(response.status)).json({ message: response.message });
}
async function getingProducts(req: Request, res:Response):Promise<Response> {
  const response = await productsService.getingProducts();

  return res.status(200).json(response.message);
}

export default {
  registeringProducts,
  getingProducts,
};