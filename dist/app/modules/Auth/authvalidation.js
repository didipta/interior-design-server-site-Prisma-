"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authsignupValidation = exports.authValidation = void 0;
const zod_1 = require("zod");
exports.authValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'Email is required' }).email(),
        password: zod_1.z
            .string({ required_error: 'Password is required' })
            .min(6)
            .max(255),
    }),
});
exports.authsignupValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .min(4)
            .max(30),
        email: zod_1.z.string({ required_error: 'Email is required' }).email(),
        password: zod_1.z
            .string({ required_error: 'Password is required' })
            .min(6)
            .max(20),
    }),
});
