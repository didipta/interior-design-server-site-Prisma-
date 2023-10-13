/* eslint-disable @typescript-eslint/no-explicit-any */
import { profiledetails } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertprofike = async (id: any): Promise<profiledetails | null> => {
  const data: profiledetails = {} as profiledetails;
  data.userId = id;
  data.address = ' ';
  data.phonenumber = ' ';
  data.profileimg =
    'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png';
  const result = await prisma.profiledetails.create({
    data,
  });
  return result;
};

const getprofile = async (id: any): Promise<profiledetails | null | any> => {
  const result = await prisma.profiledetails.findUnique({
    where: {
      userId: id,
    },
    include: {
      user: true,
    },
  });
  const data = {
    name: result?.user?.name,
    email: result?.user?.email,
    address: result?.address,
    phonenumber: result?.phonenumber,
    profileimg: result?.profileimg,
    role: result?.user?.role,
  };
  return data;
};

const updateprofile = async (
  data: any,
  id: any
): Promise<profiledetails | null | any> => {
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
    },
  });
  const result = await prisma.profiledetails.update({
    where: {
      userId: id,
    },
    include: {
      user: true,
    },
    data,
  });
  return result;
};

const getfulluser = async (id: any): Promise<profiledetails | null | any> => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      review: true,
      booking: true,
      cart: true,
      feedback: true,
      notification: true,
    },
  });
  return result;
};

export const profileService = {
  insertprofike,
  getprofile,
  updateprofile,
  getfulluser,
};
