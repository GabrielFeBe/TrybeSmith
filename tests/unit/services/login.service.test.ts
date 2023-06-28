import { expect } from 'chai';
import sinon from 'sinon';
import loginService from '../../../src/services/user';
import UserModel from '../../../src/database/models/user.model';
import { invalidPassword, invalidUsername, nullValuesLogin, userToBuild, validLogin } from '../../mocks/login.mock';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  it('', async function () {
    const userModelMock = UserModel.build(userToBuild)
    sinon.stub(UserModel, 'findOne').resolves(userModelMock)
    const response = await loginService.loginAccount(validLogin)
    expect(response.status).to.eq('SUCESS')
  })
});
describe('LoginService Fail Password', function () {
  beforeEach(function () { sinon.restore(); });
  it('', async function () {
    const userModelMock = UserModel.build(userToBuild)
    sinon.stub(UserModel, 'findOne').resolves(userModelMock)
    const response = await loginService.loginAccount(invalidPassword)
    expect(response.status).to.eq('UNAUTHORIZED')
  })
});
describe('LoginService Fail Login', function () {
  beforeEach(function () { sinon.restore(); });
  it('', async function () {
    const userModelMock = UserModel.build(userToBuild)
    sinon.stub(UserModel, 'findOne').resolves(userModelMock)
    const response = await loginService.loginAccount(invalidUsername)
    expect(response.status).to.eq('UNAUTHORIZED')
  })
});
describe('LoginService Fail Login', function () {
  beforeEach(function () { sinon.restore(); });
  it('', async function () {
    const userModelMock = UserModel.build(userToBuild)
    sinon.stub(UserModel, 'findOne').resolves(userModelMock)
    const response = await loginService.loginAccount(nullValuesLogin)
    expect(response.status).to.eq('BAD_REQUEST')
  })
});
