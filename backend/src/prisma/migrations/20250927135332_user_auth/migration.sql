-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "public"."User_Session" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "User_Session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."User_Session" ADD CONSTRAINT "User_Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
