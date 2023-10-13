import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { reviewService } from './review.service';

const insertreview = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await reviewService.insertreview(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'review created successfully',
    data: result,
  });
});

export const reviewController = {
  insertreview,
};
