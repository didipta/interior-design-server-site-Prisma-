import { cart } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { notificationService } from '../notification/notification.service';

const insertcart = async (data: cart, id: string): Promise<cart> => {
  data.userId = id;
  data.quantity = 1;
  const result = await prisma.cart.create({
    data,
    include: {
      service: true,
    },
  });
  if (result) {
    notificationService.notificationcreate({
      type: 'cart',
      title: `${result.service.name} Added to cart`,
      notification: 'cart added successfully',
      userId: id,
    });
  }

  return result;
};

const getcart = async (id: string): Promise<cart[]> => {
  return await prisma.cart.findMany({
    where: {
      userId: id,
    },
    include: {
      service: {
        select: {
          name: true,
          price: true,
          img: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const deletecart = async (id: string): Promise<cart> => {
  return await prisma.cart.delete({
    where: {
      id: id,
    },
  });
};

const getallcart = async (): Promise<cart[]> => {
  return await prisma.cart.findMany();
};

export const cartService = {
  insertcart,
  getcart,
  deletecart,
  getallcart,
};
