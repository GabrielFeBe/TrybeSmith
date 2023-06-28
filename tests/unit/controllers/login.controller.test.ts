import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginCrontroller from '../../../src/controllers/user'
import loginService from '../../../src/services/user'
import { invalidReqBad, invalidReqUn, validReq } from '../../mocks/login.mock';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  beforeEach(function () { sinon.restore(); });
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
  it('Trying to log in BAD_REQUEST', async function () {
    sinon.stub(loginService, 'loginAccount').resolves(invalidReqBad)
    await loginCrontroller.loginAccount(req, res)
    expect(res.status).to.have.been.calledWith(400)

  })
  it('Trying to log in UNAUTHORIZED', async function () {
    sinon.stub(loginService, 'loginAccount').resolves(invalidReqUn)
    await loginCrontroller.loginAccount(req, res)
    expect(res.status).to.have.been.calledWith(401)

  })


});
