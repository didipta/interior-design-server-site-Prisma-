/*
  Warnings:

  - You are about to drop the column `email` on the `profiledetails` table. All the data in the column will be lost.
  - You are about to drop the column `phonenumber` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phonenumber]` on the table `profiledetails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phonenumber` to the `profiledetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defaultpassword` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "profiledetails_email_key";

-- DropIndex
DROP INDEX "users_phonenumber_key";

-- AlterTable
ALTER TABLE "profiledetails" DROP COLUMN "email",
ADD COLUMN     "phonenumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "phonenumber",
ADD COLUMN     "defaultpassword" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "servicecategory" (
    "id" TEXT NOT NULL,
    "categoryname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "servicecategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "Available" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shortdescription" TEXT NOT NULL,
    "servicecategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiledetails_phonenumber_key" ON "profiledetails"("phonenumber");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_servicecategoryId_fkey" FOREIGN KEY ("servicecategoryId") REFERENCES "servicecategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
