"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentslice = void 0;
const zod_1 = require("zod");
exports.contentslice = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is required',
        }),
        content: zod_1.z.string({
            required_error: 'content is required',
        }),
        type: zod_1.z.string({
            required_error: 'type is required',
        }),
        slug: zod_1.z.string({
            required_error: 'slug is required',
        }),
    }),
});
