import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { serviceService } from '../Service/service.service';
import { contentService } from '../content/content.service';

const homedata = catchAsync(async (req, res) => {
  const service = await serviceService.topfiveservice();
  const content = await contentService.fivetypewish();
  const data = {
    service,
    content,
  };
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'data fatch successfully',
    data: data,
  });
});

export const homeController = {
  homedata,
};
