import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      {
        name: "John Sila",
        email: "john.silva@example.com",
      },
      {
        name: "John Alamedas",
        email: "john.alamedas@example.com",
      },
      {
        name: "John Guedes",
        email: "john.guedes@example.com",
      },
      {
        name: "John Santos",
        email: "john.santos@example.com",
      },
      {
        name: "John Marcio",
        email: "john.marcio@example.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("database seeded");
  prisma.$disconnect();
});
