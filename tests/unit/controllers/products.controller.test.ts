import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/products';
import ProductController from '../../../src/controllers/products';
import { mockBuildProd } from '../../mocks/products.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();

  });

  it('registering Products sucess', async function () {

    const mock = ProductModel.build(mockBuildProd)
    sinon.stub(productService, 'registeringProducts').resolves({ status: 'SUCESS_1', message: mock })
    req.body = { name: 'superxand', price: '10 gold' }
    await ProductController.registeringProducts(req, res)
    expect(res.status).to.have.been.calledWith(201)

  })
  it('registering Products Fail', async function () {

    sinon.stub(productService, 'registeringProducts').resolves({ status: 'UNPROCESSABLE_ENTITY', message: '"name" must be a string' })
    req.body = { name: 'superxand', price: '10 gold' }
    await ProductController.registeringProducts(req, res)
    expect(res.status).to.have.been.calledWith(422)

  })
  it('getingProducts list SUCESS', async function () {
    const mock = ProductModel.build(mockBuildProd)
    sinon.stub(productService, 'getingProducts').resolves({ status: 'SUCESS', message: [mock] })
    await ProductController.getingProducts(req, res)
    expect(res.status).to.have.been.calledWith(200)
  })


});
