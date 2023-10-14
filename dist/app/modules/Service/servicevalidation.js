"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const zod_1 = require("zod");
exports.service = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }).min(1, {
            message: 'Name is required',
        }),
        img: zod_1.z.string({ required_error: 'Image is required' }).min(1, {
            message: 'Image is required',
        }),
        price: zod_1.z.number({ required_error: 'Price is required' }).min(1, {
            message: 'Price is required',
        }),
        Available: zod_1.z.number({ required_error: 'Available is required' }).min(1, {
            message: 'Available is required',
        }),
        status: zod_1.z.number({ required_error: 'Status is required' }),
        slug: zod_1.z.string({ required_error: 'Slug is required' }).min(1, {
            message: 'Slug is required',
        }),
        description: zod_1.z
            .string({ required_error: 'Description is required' })
            .min(1, {
            message: 'Description is required',
        }),
        shortdescription: zod_1.z
            .string({
            required_error: 'Short Description is required',
        })
            .min(1, {
            message: 'Short Description is required',
        })
            .max(100),
        servicecategoryId: zod_1.z
            .string({
            required_error: 'Service Category Id is required',
        })
            .min(1, {
            message: 'Service Category Id is required',
        }),
    }),
});
