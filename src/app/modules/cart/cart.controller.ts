import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { cartService } from './cart.service';

const insertcart = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }
  // verify token
  let verifiedUser = null;
  verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
  const id = verifiedUser.userId;
  const cart = cartService.insertcart(req.body, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'cart inserted successfully',
    data: cart,
  });
});

const getcart = catchAsync(async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
    // verify token
    let verifiedUser = null;
    verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);
    const id = verifiedUser.userId;
    const cart = await cartService.getcart(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'cart fetched successfully',
        data: cart,
    });
    });

const deletecart = catchAsync(async (req, res) => {
    const cart = await cartService.deletecart(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'cart deleted successfully',
        data: cart,
    });
    }
);

const getallcart = catchAsync(async (req, res) => {
    const cart = await cartService.getallcart();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'cart fetched successfully',
        data: cart,
    });
    }
);

export const cartController = {
  insertcart,
  getcart,
  deletecart,
  getallcart,
};
