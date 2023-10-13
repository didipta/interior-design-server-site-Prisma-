import { cart } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertcart = async (data: cart, id: string): Promise<cart> => {
  data.userId = id;
  data.quantity = 1;
  return await prisma.cart.create({
    data,
  });
};

const getcart = async (id: string): Promise<cart[]> => {
  return await prisma.cart.findMany({
    where: {
      userId: id,
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
