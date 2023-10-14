"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingstatus = exports.booking = void 0;
const zod_1 = require("zod");
exports.booking = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z.string({ required_error: 'Service Id is required' }),
        serviceprice: zod_1.z.number({ required_error: 'Service Price is required' }),
        bookingdate: zod_1.z.string({ required_error: 'Booking Date is required' }),
    }),
});
exports.bookingstatus = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(['pedding', 'accepted', 'rejected']),
    }),
});
