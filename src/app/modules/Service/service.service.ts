import { service } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createservice = async (data: service): Promise<service> => {
  const service = await prisma.service.findFirst({
    where: {
      name: data.name,
    },
  });
  if (service) {
    throw new Error('service already exists');
  }
  const result = await prisma.service.create({
    data,
  });
  return result;
};

export const serviceService = {
  createservice,
};
