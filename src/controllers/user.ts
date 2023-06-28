import { Request, Response } from 'express';
import errorHandler from '../middlewares/errorHandles';
import userService from '../services/user';

async function loginAccount(req: Request, res:Response):Promise<Response> {
  const response = await userService.loginAccount(req.body);
  if (response.status === 'SUCESS') { 
    return res.status(errorHandler(response.status)).json({ token: response.message }); 
  }

  return res.status(errorHandler(response.status)).json({ message: response.message });
}

export default {
  loginAccount,
};