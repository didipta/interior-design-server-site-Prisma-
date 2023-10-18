/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from '../../../shared/prisma';

const notificationcreate = async (data: any) => {
  const result = await prisma.notification.create({
    data: {
      type: data.type,
      title: data.title,
      notification: data.notification,
      userId: data.userId,
    },
  });
  return result;
};

const notificationget = async (id: any) => {
  const result = await prisma.notification.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  const length = await prisma.notification.count({
    where: {
      userId: id,
      status: 0,
    },
  });
  return {
    result,
    length,
  };
};

const notificationupdate = async (id: any) => {
  const result = await prisma.notification.updateMany({
    where: {
      userId: id,
      status: 0,
    },
    data: {
      status: 1,
    },
  });
  return result;
};

const notificationdelete = async (id: any) => {
  const result = await prisma.notification.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const notificationService = {
  notificationget,
  notificationupdate,
  notificationdelete,
  notificationcreate,
};
