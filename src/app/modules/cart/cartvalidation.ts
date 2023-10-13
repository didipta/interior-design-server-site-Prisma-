import { z } from 'zod';
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
export const cartslice = z.object({
  body: z.object({
    serviceId: z.string({
      required_error: 'serviceId is required',
    }),
  }),
});
