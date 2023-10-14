import { servicecategory } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createservicecate = async (
  data: servicecategory
): Promise<servicecategory> => {
  const servicecate = await prisma.servicecategory.findFirst({
    where: {
      categoryname: data.categoryname,
    },
  });
  if (servicecate) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'service category already exists'
    );
  }
  const result = await prisma.servicecategory.create({
    data,
  });
  return result;
};

const getcategory = async (): Promise<servicecategory[]> => {
  const result = await prisma.servicecategory.findMany({
    include: {
      service: true,
    },
  });

  return result;
};

const getcategorybyid = async (id: string): Promise<servicecategory | null> => {
  const result = await prisma.servicecategory.findUnique({
    where: {
      id: id,
    },
    include: {
      service: true,
    },
  });
  return result;
};

const updatecategory = async (
  id: string,
  data: servicecategory
): Promise<servicecategory | null> => {
  const result = await prisma.servicecategory.update({
    where: {
      id: id,
    },
    data,
  });
  return result;
};

const deleteservicecate = async (
  id: string
): Promise<servicecategory | null> => {
  const result = await prisma.servicecategory.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const servicecategoryService = {
  createservicecate,
  getcategory,
  getcategorybyid,
  updatecategory,
  deleteservicecate,
};
