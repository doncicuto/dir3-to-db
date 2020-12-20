import { PrismaClient } from "@prisma/client";

import { showErrorMessage, showMessage } from "./utils/logging";
import { importToDatabase } from "./utils/importToDatabase";
import { clearTable } from "./utils/clearTable";

const prisma = new PrismaClient();

const importFiles = [
  {
    name: "unitsAGE.json",
    createUnit: prisma.organicUnitAGE.create,
    deleteUnits: prisma.organicUnitAGE.deleteMany,
  },
  {
    name: "unitsCCAA.json",
    createUnit: prisma.organicUnitCCAA.create,
    deleteUnits: prisma.organicUnitCCAA.deleteMany,
  },
  {
    name: "unitsEELL.json",
    createUnit: prisma.organicUnitLocalEntity.create,
    deleteUnits: prisma.organicUnitLocalEntity.deleteMany,
  },
  {
    name: "unitsInstitutions.json",
    createUnit: prisma.organicUnitInstitution.create,
    deleteUnits: prisma.organicUnitInstitution.deleteMany,
  },
  {
    name: "unitsJustice.json",
    createUnit: prisma.organicUnitJustice.create,
    deleteUnits: prisma.organicUnitJustice.deleteMany,
  },
  {
    name: "unitsUniversities.json",
    createUnit: prisma.organicUnitUniversity.create,
    deleteUnits: prisma.organicUnitUniversity.deleteMany,
  },
];

showMessage("\nImporting JSON files to database.");
showMessage("-----------------------------------------------");
showMessage("This will take some minutes, please be patient!");
showMessage("-----------------------------------------------");

const main = async () => {
  for (const file of importFiles) {
    try {
      await clearTable(file.deleteUnits);
      await importToDatabase(file.name, file.createUnit);
    } catch (error) {
      showErrorMessage(error);
    }
  }
  console.log("ddd");
  await prisma.$disconnect();
};

main();
