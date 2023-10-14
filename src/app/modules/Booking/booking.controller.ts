import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { bookingService } from './booking.service';

const createbooking = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const result = await bookingService.createbooking(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'booking created successfully',
    data: result,
  });
});

const allbooking = catchAsync(async (req, res) => {
  const result = await bookingService.allbooking();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'booking fetched successfully',
    data: result,
  });
});

const bookingstatuschange = catchAsync(async (req, res) => {
  const result = await bookingService.bookingstatuschange(
    req.params.id,
    req.body.status
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'booking status changed successfully',
    data: result,
  });
});

export const bookingController = {
  createbooking,
  allbooking,
  bookingstatuschange,
};
