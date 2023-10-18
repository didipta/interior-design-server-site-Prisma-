/* eslint-disable @typescript-eslint/no-explicit-any */
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
const fivetypewish = async (): Promise<any> => {
  const faq = await prisma.content.findMany({
    where: {
      type: 'faq',
    },
    take: 5,
    orderBy: {
      id: 'desc',
    },
  });
  const blog = await prisma.content.findMany({
    where: {
      type: 'blog',
    },
    take: 5,
    orderBy: {
      id: 'desc',
    },
  });
  return {
    faq: faq,
    blog: blog,
  };
};

export const contentService = {
  insertcontent,
  getcontent,
  deletecontent,
  fivetypewish,
};
