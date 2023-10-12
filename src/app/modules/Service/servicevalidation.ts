import { z } from 'zod';

export const service = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    img: z.string({ required_error: 'Image is required' }),
    price: z.number({ required_error: 'Price is required' }),
    Available: z.number({ required_error: 'Available is required' }),
    status: z.number({ required_error: 'Status is required' }),
    slug: z.string({ required_error: 'Slug is required' }),
    description: z.string({ required_error: 'Description is required' }),
    shortdescription: z.string({
      required_error: 'Short Description is required',
    }),
    servicecategoryId: z.string({
      required_error: 'Service Category Id is required',
    }),
  }),
});
