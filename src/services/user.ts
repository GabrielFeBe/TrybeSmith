import bcrypt from 'bcryptjs';
import { UserBody } from '../types/User';
import UserModel from '../database/models/user.model';
import jwtUtil from '../database/utils/jwt';

type StatusResponse = {
  status: string,
  message:string
};

async function loginAccount(user:UserBody):Promise<StatusResponse> {
  const { username, password } = user;
  if (!username || !password) {
    return { status: 'BAD_REQUEST', 
      message: '"username" and "password" are required' };
  }
  const response = await UserModel.findOne({ where: { username } });
  
  if (!response || !bcrypt.compareSync(password, response.dataValues.password)) {
    return { status: 'UNAUTHORIZED', message: 'Username or password invalid' };
  }
  const token = jwtUtil.singUp({ username, id: response.dataValues.id });
  return { status: 'SUCESS', message: token };
}

export default {
  loginAccount,
};