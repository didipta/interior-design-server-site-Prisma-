"use strict";
// model servicecategory{
//   id        String   @id @default(uuid())
//   categoryname String
//   service service[]
//   createdAt  DateTime @default(now())
//   updatedAt  DateTime @updatedAt
//   @@map("servicecategory")
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const zod_1 = require("zod");
exports.category = zod_1.z.object({
    body: zod_1.z.object({
        categoryname: zod_1.z.string({ required_error: 'Category name is required' }),
    }),
});
