import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { feedbackService } from './feedback.service';

const insertfeedback = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  } // verify token

  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const feedback = feedbackService.insertfeedback(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'feedback inserted successfully',
    data: feedback,
  });
});
const getfeedback = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  } // verify token

  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const feedback = await feedbackService.getfeedback(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'feedback fetched successfully',
    data: feedback,
  });
});

const deletefeedback = catchAsync(async (req, res) => {
  const feedback = await feedbackService.deletefeedback(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'feedback deleted successfully',
    data: feedback,
  });
});

const getallfeedback = catchAsync(async (req, res) => {
  const feedback = await feedbackService.getallfeedback();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'feedback fetched successfully',
    data: feedback,
  });
});

export const feedbackController = {
  insertfeedback,
  getfeedback,
  deletefeedback,
  getallfeedback,
};
