/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `profiledetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `profiledetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_email_key";

-- AlterTable
ALTER TABLE "profiledetails" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "email";

-- CreateIndex
CREATE UNIQUE INDEX "profiledetails_email_key" ON "profiledetails"("email");
