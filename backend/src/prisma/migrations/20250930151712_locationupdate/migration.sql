/*
  Warnings:

  - You are about to drop the column `current_location` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `dropoff_location` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `pickup_location` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `current_location_id` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dropoff_location_id` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickup_location_id` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Car" DROP COLUMN "current_location",
ADD COLUMN     "current_location_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Reservation" DROP COLUMN "dropoff_location",
DROP COLUMN "pickup_location",
ADD COLUMN     "dropoff_location_id" INTEGER NOT NULL,
ADD COLUMN     "pickup_location_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Car" ADD CONSTRAINT "Car_current_location_id_fkey" FOREIGN KEY ("current_location_id") REFERENCES "public"."Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reservation" ADD CONSTRAINT "Reservation_pickup_location_id_fkey" FOREIGN KEY ("pickup_location_id") REFERENCES "public"."Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reservation" ADD CONSTRAINT "Reservation_dropoff_location_id_fkey" FOREIGN KEY ("dropoff_location_id") REFERENCES "public"."Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
