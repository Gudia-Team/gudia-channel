/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Movie` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_userId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "duration" SET DATA TYPE TEXT;
