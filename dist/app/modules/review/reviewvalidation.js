"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewslice = void 0;
const zod_1 = require("zod");
exports.reviewslice = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z
            .string({
            required_error: 'serviceId is required',
        })
            .nonempty(),
        review: zod_1.z
            .string({
            required_error: 'review is required',
        })
            .nonempty(),
        rating: zod_1.z
            .number({
            required_error: 'rating is required',
        })
            .int()
            .min(1)
            .max(5),
    }),
});
