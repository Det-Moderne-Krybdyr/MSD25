import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  await prisma.user.createMany({
    data: [
      { name: "Julius", email: "julius@test.com" },
      { name: "Anna", email: "anna@test.com" },
    ],
    skipDuplicates: true, // undgå fejl hvis samme user findes
  });

  // Seed Cars
  await prisma.car.createMany({
    data: [
      { name: "Audi A3 Sportback", image: "audi.png", price: "100 kr./dag" },
      { name: "Volkswagen ID.7", image: "vw.png", price: "120 kr./dag" },
      { name: "Hyundai i20", image: "hyundai.png", price: "80 kr./dag" },
    ],
    skipDuplicates: true, // undgå dubletter
  });
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
