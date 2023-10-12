import { z } from 'zod';

export const authValidation = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }).email(),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6)
      .max(255),
  }),
});
export const authsignupValidation = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .min(4)
      .max(30),
    email: z.string({ required_error: 'Email is required' }).email(),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6)
      .max(20),
  }),
});
