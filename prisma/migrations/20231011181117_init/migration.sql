-- CreateTable
CREATE TABLE "profiledetails" (
    "id" TEXT NOT NULL,
    "profileimg" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "profiledetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiledetails_userId_key" ON "profiledetails"("userId");

-- AddForeignKey
ALTER TABLE "profiledetails" ADD CONSTRAINT "profiledetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
