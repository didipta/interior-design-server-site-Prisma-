/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma, service } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { Iservicefilter, serviceSearchableFields } from './service.interface';

const createservice = async (data: service): Promise<service> => {
  const service = await prisma.service.findFirst({
    where: {
      name: data.name,
    },
  });
  if (service) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'service already exists');
  }
  data.price = parseFloat(data.price.toString());
  data.Available = 1;
  data.status = 1;
  const result = await prisma.service.create({
    data,
  });
  return result;
};

const getservice = async (
  filter: Iservicefilter,
  options: IPaginationOptions
): Promise<IGenericResponse<service[]>> => {
  const { limit, page, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, minPrice, maxPrice, ...filterData } = filter;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: serviceSearchableFields.map(field => {
        const condition: any = {};
        if (field === 'price' || field === 'Available' || field === 'status') {
          // Handle numeric fields with appropriate filters
          condition[field] = {
            equals: parseInt(searchTerm) || 0, // Assuming searchTerm is a numeric string
          };
        } else {
          // Handle string fields with contains filter
          condition[field] = {
            contains: searchTerm,
            mode: 'insensitive',
          };
        }
        return condition;
      }),
    });
  }
  if (minPrice !== undefined) {
    andConditions.push({
      price: {
        gte: parseFloat(minPrice.toString()),
      },
    });
  }

  if (maxPrice !== undefined) {
    andConditions.push({
      price: {
        lte: parseFloat(maxPrice.toString()),
      },
    });
  }
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }
  const whereConditions: Prisma.serviceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.service.findMany({
    include: {
      servicecategory: true,
      review: true,
      booking: true,
      cart: true,
    },
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.service.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};
const getservicebyid = async (id: string): Promise<service | null> => {
  const result = await prisma.service.findUnique({
    where: {
      id: id,
    },
    include: {
      servicecategory: true,
      review: {
        include: {
          user: {
            select: {
              name: true,
              profile: {
                select: {
                  profileimg: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return result;
};

const updateservice = async (
  id: string,
  data: service
): Promise<service | null> => {
  const result = await prisma.service.update({
    where: {
      id: id,
    },
    data,
  });
  return result;
};
const deleteservice = async (id: string): Promise<service | null> => {
  await prisma.review.deleteMany({
    where: {
      serviceId: id,
    },
  });
  await prisma.cart.deleteMany({
    where: {
      serviceId: id,
    },
  });
  await prisma.booking.deleteMany({
    where: {
      serviceId: id,
    },
  });

  const result = await prisma.service.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const serviceService = {
  createservice,
  getservice,
  getservicebyid,
  updateservice,
  deleteservice,
};
