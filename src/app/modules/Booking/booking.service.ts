/* eslint-disable @typescript-eslint/no-explicit-any */
import { booking } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { notificationService } from '../notification/notification.service';

const createbooking = async (
  data: booking,
  id: any
): Promise<booking | null> => {
  data.userId = id;
  data.bookingdate = new Date(data.bookingdate);
  const result = await prisma.booking.create({
    data,
    include: {
      service: true,
    },
  });
  if (result) {
    notificationService.notificationcreate({
      type: 'booking',
      title: `${result.service.name} Booked`,
      notification: 'Received your booking',
      userId: id,
    });
  }
  return result;
};

const allbooking = async (): Promise<booking[]> => {
  return await prisma.booking.findMany();
};

const bookingstatuschange = async (
  id: string,
  status: string | any
): Promise<booking> => {
  const result = await prisma.booking.update({
    where: {
      id: id,
    },
    data: {
      status: status,
    },
    include: {
      service: true,
    },
  });

  if (result) {
    notificationService.notificationcreate({
      type: 'booking',
      title: `${result.service.name} Booking status changed to ${status}`,
      notification: 'Booking status changed',
      userId: result.userId,
    });
  }

  return result;
};

export const bookingService = {
  createbooking,
  allbooking,
  bookingstatuschange,
};
