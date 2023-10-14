import { z } from 'zod';

export const booking = z.object({
  body: z.object({
    serviceId: z.string({ required_error: 'Service Id is required' }),
    serviceprice: z.number({ required_error: 'Service Price is required' }),
    bookingdate: z.string({ required_error: 'Booking Date is required' }),
  }),
});
export const bookingstatus = z.object({
  body: z.object({
    status: z.enum(['pedding', 'accepted', 'rejected']),
  }),
});
