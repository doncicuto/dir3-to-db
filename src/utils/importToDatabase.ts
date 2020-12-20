import { showErrorMessage, showMessage } from "./logging";
import { importUnit } from "./importUnit";
import { readUnits } from "./readUnits";

export const importToDatabase = async (
  fileName: string,
  createUnit: Function
) => {
  const units = await readUnits(fileName);
  if (units) {
    for (const unit of units) {
      try {
        await importUnit(unit, createUnit);
      } catch (error) {
        showErrorMessage(error);
      }
    }
    showMessage(`${fileName} imported successfully!`);
  }
};
