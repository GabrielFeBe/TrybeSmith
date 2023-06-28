import { expect } from 'chai';
import sinon from 'sinon';
import ProductService from '../../../src/services/products'
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';
import { mockBuildProd } from '../../mocks/products.mock';
import { Product } from '../../../src/types/Product';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('testing the function that get all the products', async function () {
    const mock = ProductModel.build(mockBuildProd)

    sinon.stub(ProductModel, 'findAll').resolves([mock])
    const response = await ProductService.getingProducts()

    expect(response.status).to.eq('SUCESS')
  })
  it('testing the function that register the products/ Name Null', async function () {
    const objMock: unknown = {
      name: null,
      price: '15 gold',
      orderId: 1
    }

    const response = await ProductService.registeringProducts(objMock as Product)

    expect(response.message).to.eq('"name" must be a string')
  })
  it('testing the function that register the products/ Price Null', async function () {
    const objMock: unknown = {
      name: 'superWarrior',
      price: null,
      orderId: 1
    }

    const response = await ProductService.registeringProducts(objMock as Product)

    expect(response.message).to.eq('"price" must be a string')
  })
  it('testing the function that register the products/Price With Wrong Length', async function () {
    const objMock = {
      name: 'superWarrior',
      price: 'sm',
      orderId: 1
    }

    const response = await ProductService.registeringProducts(objMock)

    expect(response.message).to.eq('"price" length must be at least 3 characters long')
  })
  it('testing the function that register the products/ Name With Wrong Length', async function () {
    const objMock = {
      name: 'sm',
      price: '15 gold',
      orderId: 1
    }

    const response = await ProductService.registeringProducts(objMock)

    expect(response.message).to.eq('"name" length must be at least 3 characters long')
  })
  it('testing the function that register the products/ SUCESS', async function () {
    const mock = ProductModel.build(mockBuildProd)
    const objMock = {
      name: 'superWarrior',
      price: 'smaaa',
      orderId: 1
    }
    sinon.stub(ProductModel, 'create').resolves(mock)
    const response = await ProductService.registeringProducts(objMock)

    expect(response.status).to.eq('SUCESS_1')
  })
});
