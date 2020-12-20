import { Prisma } from "@prisma/client";
import { showErrorMessage } from "./logging";

export const clearTable = async (deleteUnits: Function) => {
  try {
    await deleteUnits({});
  } catch (error) {
    showErrorMessage(error);
  }
};
