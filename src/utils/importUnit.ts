import { commonDIR3Unit } from "./types";

export const importUnit = async (unit: commonDIR3Unit, create: Function) => {
  await create({
    data: {
      id: unit.C_ID_UD_ORGANICA,
      description: unit.C_DNM_UD_ORGANICA,
      level: unit.C_ID_NIVEL_ADMON,
      type: unit.C_ID_TIPO_ENT_PUBLICA,
      hierarchicalLevel: unit.C_ID_AMB_PROVINCIA
        ? unit.C_DESC_PROV
        : unit.N_NIVEL_JERARQUICO
        ? unit.N_NIVEL_JERARQUICO
        : null,
      hierarchicalSuperiorUnitId: unit.C_ID_DEP_UD_SUPERIOR,
      hierarchicalSuperiorUnitDescription: unit.C_DNM_UD_ORGANICA_SUPERIOR,
      rootOrganicUnitId: unit.C_ID_DEP_UD_PRINCIPAL,
      rootOrganicUnitDescription: unit.C_DNM_UD_ORGANICA_PRINCIPAL,
      publicLawEntityIndicator: unit.B_SW_DEP_EDP_PRINCIPAL,
      rootPublicLawEntityIndicatorId: unit.C_ID_DEP_EDP_PRINCIPAL,
      rootPublicLawEntityIndicatorDescription:
        unit.C_DNM_UD_ORGANICA_EDP_PRINCIPAL,
      status: unit.C_ID_ESTADO,
      officialCreationDate: unit.D_VIG_ALTA_OFICIAL
        ? new Date(unit.D_VIG_ALTA_OFICIAL)
        : null,
      provinceDesc: unit.C_ID_AMB_PROVINCIA ? unit.C_ID_AMB_PROVINCIA : null,
      provinceId: unit.C_ID_AMB_PROVINCIA
        ? unit.N_NIVEL_JERARQUICO
          ? unit.N_NIVEL_JERARQUICO
          : null
        : null,
      nifOrCif: unit.NIF_CIF,
    },
  });
};
