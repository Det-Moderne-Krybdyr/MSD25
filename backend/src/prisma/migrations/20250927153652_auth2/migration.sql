/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `User_Session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_Session_token_key" ON "public"."User_Session"("token");
