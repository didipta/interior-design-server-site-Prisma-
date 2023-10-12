/* eslint-disable @typescript-eslint/no-explicit-any */
import { booking } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createbooking = async (
  data: booking,
  id: any
): Promise<booking | null> => {
  data.userId = id;
  data.bookingtime = 'null';
  const result = await prisma.booking.create({
    data,
  });
  if (result) {
    await prisma.notification.create({
      data: {
        type: 'booking',
        notification: 'You have a new booking',
        userId: id,
      },
    });
  }
  return result;
};

export const bookingService = {
  createbooking,
};
