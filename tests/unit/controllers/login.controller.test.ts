import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginCrontroller from '../../../src/controllers/user'
import loginService from '../../../src/services/user'
import { validReq } from '../../mocks/login.mock';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  it('Trying to log in', async function () {
    sinon.stub(loginService, 'loginAccount').resolves(validReq)
    await loginCrontroller.loginAccount(req, res)
    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledOnceWith({ token: validReq.message })
  })


});
