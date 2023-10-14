"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackslice = void 0;
const zod_1 = require("zod");
exports.feedbackslice = zod_1.z.object({
    body: zod_1.z.object({
        feedback: zod_1.z.string({
            required_error: 'feedback is required',
        }),
        subject: zod_1.z.string({
            required_error: 'subject is required',
        }),
    }),
});
