import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { profileService } from './user.service';

const insertprofile = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await profileService.insertprofike(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'profile inserted successfully',
    data: result,
  });
});

const getprofile = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await profileService.getprofile(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'profile data get successfully',
    data: result,
  });
});

const updateprofile = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await profileService.updateprofile(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'profile updated successfully',
    data: result,
  });
});

const singleuseralldetails = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await profileService.getfulluser(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'profile data get successfully',
    data: result,
  });
});
export const profileController = {
  insertprofile,
  getprofile,
  updateprofile,
  singleuseralldetails,
};
