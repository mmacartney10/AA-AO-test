import { InferType, object } from "yup";

import { SchemaNavigation } from "@/types";
import addressSchema from "./shared/addressSchema";
import employmentSchema from "./shared/employmentSchema";

const createAddAnAccountSchema = () => {
  return object().shape({
    employment: employmentSchema,
    address: addressSchema,
  });
};

export const addAnAccountSchema = createAddAnAccountSchema();

export type AddAnAccountSchema = InferType<
  ReturnType<typeof createAddAnAccountSchema>
>;

export const addAnAccountDefaultState: AddAnAccountSchema = {
  address: {
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    addressLine4: "",
    addressLine5: "",
    countryIso: "",
    postcode: "",
  },
  employment: {
    status: "",
    businessName: "",
    currentEmployer: "",
    institutionName: "",
    occupation: "",
  },
};

export const addAnAccountNavigation: SchemaNavigation[] = [
  {
    routeName: "Address",
    step: 1,
  },
  {
    routeName: "Employment",
    step: 2,
  },
];
