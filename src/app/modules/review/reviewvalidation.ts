import { z } from 'zod';

export const reviewslice = z.object({
  body: z.object({
    serviceId: z
      .string({
        required_error: 'serviceId is required',
      })
      .nonempty(),
    review: z
      .string({
        required_error: 'review is required',
      })
      .nonempty(),
    rating: z
      .string({
        required_error: 'rating is required',
      })
      .nonempty(),
  }),
});
