import { z } from 'zod';

export const category = z.object({
  body: z.object({
    categoryname: z
      .string({ required_error: 'Category name is required' })
      .min(1, { message: 'Category name is required' }),
  }),
});
