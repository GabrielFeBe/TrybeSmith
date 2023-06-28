import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import OrderService from '../../../src/services/order';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });
  it('', async function () {
    const mockOrder =
    {
      "id": 1,
      "userId": 2,
    }

    const mocked = OrderModel.build(mockOrder)
    sinon.stub(OrderModel, 'findAll').resolves([mocked])
    const response = await OrderService.getingOrder()
    expect(response).to.deep.equal([mocked])
  })
});
