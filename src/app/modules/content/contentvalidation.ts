import { z } from 'zod';

export const contentslice = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    content: z.string({
      required_error: 'content is required',
    }),
    type: z.string({
      required_error: 'type is required',
    }),
    slug: z.string({
      required_error: 'slug is required',
    }),
  }),
});
