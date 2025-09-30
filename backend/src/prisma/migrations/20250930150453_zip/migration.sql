/*
  Warnings:

  - Added the required column `zip_code` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Location" ADD COLUMN     "zip_code" TEXT NOT NULL;
