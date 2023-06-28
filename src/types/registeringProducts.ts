import { ProductSequelizeModel } from '../database/models/product.model';

export type ErrorProducts = {
  message:string,
  status:'UNPROCESSABLE_ENTITY'
};

export type SucessProducts = {
  status: 'SUCESS_1',
  message: ProductSequelizeModel
};