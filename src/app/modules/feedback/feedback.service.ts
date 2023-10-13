import { feedback } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertfeedback = async (
  data: feedback,
  id: string
): Promise<feedback> => {
  data.userId = id;
  const result = await prisma.feedback.create({
    data,
  });

  return result;
};

const getfeedback = async (id: string): Promise<feedback[]> => {
  return await prisma.feedback.findMany({
    where: {
      userId: id,
    },
  });
};

const deletefeedback = async (id: string): Promise<feedback> => {
  return await prisma.feedback.delete({
    where: {
      id: id,
    },
  });
};

const getallfeedback = async (): Promise<feedback[]> => {
  return await prisma.feedback.findMany();
};

export const feedbackService = {
  insertfeedback,
  getfeedback,
  deletefeedback,
  getallfeedback,
};
