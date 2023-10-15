import { z } from 'zod';

export const service = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).min(1, {
      message: 'Name is required',
    }),
    img: z.string({ required_error: 'Image is required' }).min(1, {
      message: 'Image is required',
    }),

    price: z.string({ required_error: 'Price is required' }).min(1, {
      message: 'Price is required',
    }),
    slug: z.string({ required_error: 'Slug is required' }).min(1, {
      message: 'Slug is required',
    }),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, {
        message: 'Description is required',
      }),
    shortdescription: z
      .string({
        required_error: 'Short Description is required',
      })
      .min(1, {
        message: 'Short Description is required',
      })
      .max(100),
    servicecategoryId: z
      .string({
        required_error: 'Service Category Id is required',
      })
      .min(1, {
        message: 'Service Category Id is required',
      }),
  }),
});
