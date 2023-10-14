"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartslice = void 0;
const zod_1 = require("zod");
// model cart {
//   id         String   @id @default(uuid())
//   user User @relation(fields: [userId], references: [id])
//   userId String
//   service service @relation(fields: [serviceId], references: [id])
//   serviceId String
//   quantity Int?
//   createdAt  DateTime @default(now())
//   updatedAt  DateTime @updatedAt
//   @@map("cart")
// }
exports.cartslice = zod_1.z.object({
    body: zod_1.z.object({
        serviceId: zod_1.z.string({
            required_error: 'serviceId is required',
        }),
    }),
});
