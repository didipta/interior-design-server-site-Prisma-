import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { serviceSearch } from './service.interface';
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
const getservice = catchAsync(async (req, res) => {
  const filters = pick(req.query, serviceSearch);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  console.log('filters', filters);
  const result = await serviceService.getservice(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service fetched successfully',
    data: result,
  });
});

export const serviceController = {
  createservice,
  getservice,
};
