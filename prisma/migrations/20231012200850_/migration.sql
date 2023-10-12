/*
  Warnings:

  - The `bookingtime` column on the `booking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `bookingdate` on the `booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `title` to the `notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "booking" DROP COLUMN "bookingdate",
ADD COLUMN     "bookingdate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "bookingtime",
ADD COLUMN     "bookingtime" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "cart" ALTER COLUMN "quantity" DROP NOT NULL;

-- AlterTable
ALTER TABLE "notification" ADD COLUMN     "status" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "title" TEXT NOT NULL;
