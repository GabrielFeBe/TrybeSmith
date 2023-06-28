import { expect } from 'chai';
import sinon from 'sinon';
import ProductService from '../../../src/services/products'
import ProductModel, { ProductSequelizeModel } from '../../../src/database/models/product.model';
import { mockBuildProd } from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('', async function () {
    const mock = ProductModel.build(mockBuildProd)

    sinon.stub(ProductService, 'getingProducts').resolves({ status: 'SUCESS', message: [mock] })
    const response = await ProductService.getingProducts()

    expect(response.status).to.eq('SUCESS')
  })
});
