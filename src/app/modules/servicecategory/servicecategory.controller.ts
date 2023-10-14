import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { servicecategoryService } from './servicecategory.service';

const createservecate = catchAsync(async (req, res) => {
  const result = await servicecategoryService.createservicecate(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service category created successfully',
    data: result,
  });
});

const getcategory = catchAsync(async (req, res) => {
  const result = await servicecategoryService.getcategory();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service category fetched successfully',
    data: result,
  });
});

const getcategorybyid = catchAsync(async (req, res) => {
  const result = await servicecategoryService.getcategorybyid(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service category fetched successfully',
    data: result,
  });
});

const getallnamelist = catchAsync(async (req, res) => {
  const result = await servicecategoryService.getcategory();
  const name = result.map(item => {
    return {
      id: item.id,
      categoryname: item.categoryname,
    };
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service category fetched successfully',
    data: name,
  });
});

const updatecategory = catchAsync(async (req, res) => {
  const result = await servicecategoryService.updatecategory(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service category updated successfully',
    data: result,
  });
});

const deleteservicecate = catchAsync(async (req, res) => {
  const result = await servicecategoryService.deleteservicecate(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'service category deleted successfully',
    data: result,
  });
});

export const servicecategoryController = {
  createservecate,
  getcategory,
  getcategorybyid,
  updatecategory,
  deleteservicecate,
  getallnamelist,
};
