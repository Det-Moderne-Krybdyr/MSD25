/*
  Warnings:

  - You are about to drop the column `image` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Car` table. All the data in the column will be lost.
  - Added the required column `car_model_id` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `current_location` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Car" DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "price",
ADD COLUMN     "car_model_id" INTEGER NOT NULL,
ADD COLUMN     "current_location" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Car_Model" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Car_Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Reservation" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "car_id" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "pickup_location" TEXT NOT NULL,
    "dropoff_location" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Car" ADD CONSTRAINT "Car_car_model_id_fkey" FOREIGN KEY ("car_model_id") REFERENCES "public"."Car_Model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reservation" ADD CONSTRAINT "Reservation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reservation" ADD CONSTRAINT "Reservation_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "public"."Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
