import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import OrderModel, { OrderSequelizeModel } from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order';
import OrderControler from '../../../src/controllers/order';
import { orderResp } from '../../mocks/orders.mock';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  beforeEach(function () { sinon.restore(); });
  it('getingOrders test', async function () {

    const mock: unknown = OrderModel.build(orderResp)
    sinon.stub(orderService, 'getingOrder').resolves([mock] as OrderSequelizeModel[])
    await OrderControler.getingOrders(req, res)
    expect(res.status).to.have.been.calledWith(200)

  })
});
