import { z } from 'zod';

export const feedbackslice = z.object({
  body: z.object({
    feedback: z.string({
      required_error: 'feedback is required',
    }),
    subject: z.string({
      required_error: 'subject is required',
    }),
  }),
});
