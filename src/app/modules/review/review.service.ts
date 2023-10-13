/* eslint-disable @typescript-eslint/no-explicit-any */
import { review } from '@prisma/client';
import prisma from '../../../shared/prisma';
import { notificationService } from '../notification/notification.service';

const insertreview = async (data: review, id: any): Promise<review> => {
  data.userId = id;
  const review = await prisma.review.create({
    data: data,
  });
  if (review) {
    notificationService.notificationcreate({
      type: 'review',
      title: 'New Review',
      notification: 'Received your review',
      userId: id,
    });
  }
  return review;
};

export const reviewService = {
  insertreview,
};
