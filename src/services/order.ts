// import { Order } from '../../types/Order';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

async function getingOrder():Promise<OrderSequelizeModel[]> {
  const orders = OrderModel.findAll({ include: [{ model: ProductModel,
    as: 'productIds',
    attributes: ['id'],
  }] });
  return orders;
}

export default {
  getingOrder,
};