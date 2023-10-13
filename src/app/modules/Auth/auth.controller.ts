import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { authService } from './auth.service';

const signin = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await authService.login(loginData);
  const { accessToken, isuserExist } = result;

  const { id, name, email, role } = isuserExist;
  const user = {
    id,
    name,
    email,
    role,
  };
  // const cookieOptions = {
  //   secure: config.env === 'production',
  //   httpOnly: true,
  // };

  // res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signin successfully!',
    token: accessToken,
    data: user,
  });
});

const signup = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.signup(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Insert Successfully',
    data: result,
  });
});

export const authController = {
  signin,
  signup,
};
