// model servicecategory{
//   id        String   @id @default(uuid())
//   categoryname String
//   service service[]
//   createdAt  DateTime @default(now())
//   updatedAt  DateTime @updatedAt
//   @@map("servicecategory")
// }

import { z } from 'zod';

export const category = z.object({
  body: z.object({
    categoryname: z.string({ required_error: 'Category name is required' }),
  }),
});
