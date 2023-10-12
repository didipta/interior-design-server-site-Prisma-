import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { serviceService } from './service.service';

const createservice = catchAsync(async (req, res) => {
  const result = await serviceService.createservice(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service created successfully',
    data: result,
  });
});

export const serviceController = {
  createservice,
};
