"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const zod_1 = require("zod");
exports.category = zod_1.z.object({
    body: zod_1.z.object({
        categoryname: zod_1.z
            .string({ required_error: 'Category name is required' })
            .min(1, { message: 'Category name is required' }),
    }),
});
