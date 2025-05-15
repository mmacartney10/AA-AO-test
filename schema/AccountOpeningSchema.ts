import { InferType, object } from "yup";

import { AccountNavigation } from "@/types";

import {
  addressSchema,
  emailSchema,
  employmentSchema,
  nameSchema,
} from "@/screens/schema";

const createAccountOpeningSchema = () => {
  return object().shape({
    name: nameSchema,
    email: emailSchema,
    employment: employmentSchema,
    address: addressSchema,
  });
};

export const accountOpeningSchema = createAccountOpeningSchema();

export type AccountOpeningSchema = InferType<
  ReturnType<typeof createAccountOpeningSchema>
>;

export const accountOpeningNavigation: AccountNavigation[] = [
  {
    routeName: "Name",
    step: 1,
  },
  {
    routeName: "Email",
    step: 1,
  },
  {
    routeName: "Address",
    step: 2,
  },
  {
    routeName: "Employment",
    step: 3,
  },
];
