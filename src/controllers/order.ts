import { Request, Response } from 'express';
import orderService from '../services/order';

async function getingOrders(req: Request, res:Response):Promise<Response> {
  const response = await orderService.getingOrder();
  const newResponse = response.map(({ dataValues: d }) => ({ id: d.id,
    userId: d.userId,
    productIds: d.productIds?.map(({ id }) => id),
  }));

  return res.status(200).json(newResponse);
}

export default {
  getingOrders,
};