import { content } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertcontent = async (data: content): Promise<content> => {
  const result = await prisma.content.create({
    data,
  });
  return result;
};

const getcontent = async (): Promise<content[]> => {
  return await prisma.content.findMany();
};

const deletecontent = async (id: string): Promise<content> => {
  return await prisma.content.delete({
    where: {
      id: id,
    },
  });
};

export const contentService = {
  insertcontent,
  getcontent,
  deletecontent,
};
