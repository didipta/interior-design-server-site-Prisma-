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
  });
  if (result) {
    notificationService.notificationcreate({
      type: 'booking',
      title: 'New Booking',
      notification: 'Received your booking',
      userId: id,
    });
  }
  return result;
};

export const bookingService = {
  createbooking,
};
