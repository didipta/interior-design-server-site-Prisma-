import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { notificationService } from './notification.service';

const getallnotificaton = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await notificationService.notificationget(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'your notification',
    data: result,
  });
});

const updatenotification = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await notificationService.notificationupdate(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'notification updated',
    data: result,
  });
});

const notificationdelete = catchAsync(async (req, res) => {
  const result = await notificationService.notificationdelete(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'notification deleted',
    data: result,
  });
});
export const notificationController = {
  getallnotificaton,
  updatenotification,
  notificationdelete,
};
