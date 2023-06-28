import { Product } from '../types/Product';
import { ErrorProducts, SucessProducts } from '../types/registeringProducts';
import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

async function registeringProducts(product:Product):Promise<ErrorProducts | SucessProducts> {
  const { name, price } = product;
  if (typeof name !== 'string') { 
    return { status: 'UNPROCESSABLE_ENTITY', message: '"name" must be a string' }; 
  }
  if (typeof price !== 'string') { 
    return { status: 'UNPROCESSABLE_ENTITY', message: '"price" must be a string' }; 
  }
  if (name.length < 3) {
    return { status: 'UNPROCESSABLE_ENTITY',
      message: '"name" length must be at least 3 characters long' };
  }
  if (price.length < 3) {
    return { status: 'UNPROCESSABLE_ENTITY', 
      message: '"price" length must be at least 3 characters long' };
  }
  const productRegistered = await ProductModel.create(product);
  return { status: 'SUCESS_1', message: productRegistered };
}

 type ObjtGetingProd = {
   status:string,
   message: ProductSequelizeModel[]
 };
async function getingProducts():Promise<ObjtGetingProd> {
  const products = await ProductModel.findAll();
  return { status: 'SUCESS', message: products };
}

export default {
  registeringProducts,
  getingProducts,
};