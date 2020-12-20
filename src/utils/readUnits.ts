import path from "path";
import { promises as fs } from "fs";

import { showErrorMessage } from "./logging";
import { commonDIR3Unit } from "./types";

export const readUnits = async (
  fileName: string
): Promise<commonDIR3Unit[] | undefined> => {
  try {
    const rawUnits = await fs.readFile(
      path.join(__dirname, "filesToImport", fileName),
      "utf-8"
    );
    const units: commonDIR3Unit[] = JSON.parse(rawUnits);
    return units;
  } catch (error) {
    showErrorMessage(error);
  }
};
