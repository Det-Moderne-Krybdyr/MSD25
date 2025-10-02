import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import {randomInt} from "node:crypto";

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const users = [
        { name: "Julius", email: "julius@test.com" },
        { name: "Anna", email: "anna@test.com" },
      ]

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true, // undgå fejl hvis samme user findes
  });

  const locations = [
    {zip_code: "0900", name: "Copenhagen"},
    {zip_code: "8000", name: "Aarhus"},
    {zip_code: "5000", name: "Odense"},
    {zip_code: "9000", name: "Aalborg"},
  ]

  await prisma.location.createMany({
    data: locations,
    skipDuplicates: true,
  })


  const car_models = [
    { name: "Audi A3 Sportback", image: "audi.png", price: 100 },
    { name: "Volkswagen ID.7", image: "vw.png", price: 120 },
    { name: "Hyundai i20", image: "hyundai.png", price: 80 },
  ]

  // Seed Car models
  await prisma.car_Model.createMany({
    data: car_models,
    skipDuplicates: true, // undgå dubletter
  });

  let cars = []
  // seed cars
  for (let i = 0; i < 100; i++) {
    let model_id = randomInt(1, car_models.length + 1);
    let location_id = randomInt(1, locations.length + 1);

    cars.push({
      car_model_id: model_id,
      current_location_id: location_id,
    })
  }

  await prisma.car.createMany({
    data: cars,
    skipDuplicates: true
  })

  // seed reservations
  for (let i = 0; i < 100; i++) {
    let user_id = randomInt(1, users.length + 1);
    let pickup_location_id = randomInt(1, locations.length + 1);
    let dropoff_location_id = randomInt(1, locations.length + 1);
    let car_id = randomInt(1, cars.length);

    let yearAgo = new Date();
    yearAgo.setFullYear(yearAgo.getFullYear() - 1);
    let pickupDate = randomDate(yearAgo, new Date());
    let dropOffDate = new Date(pickupDate)
    let daysRented = randomInt(7, 22)
    dropOffDate.setDate(pickupDate.getDate() + daysRented);
    let car = await prisma.car.findUnique({include: {model: true} ,where: {id: car_id}})
    if (!car) continue
    let car_price = car.model.price
    let price = new Decimal(car_price.toNumber() * daysRented)


    /*await prisma.reservation.create({
      data:{
        user_id: user_id,
        pickup_location_id: pickup_location_id,
        dropoff_location_id: dropoff_location_id,
        car_id: car_id,
        start_date: pickupDate,
        end_date: dropOffDate,
        price: price,
      }
    })*/
  }

}

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

main()
  .then(async () => {
    console.log("✅ Seed complete");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed", e);
    await prisma.$disconnect();
    process.exit(1);
  });
