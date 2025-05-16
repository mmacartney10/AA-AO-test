import { InferType, object } from "yup";

import { AccountNavigation } from "@/types";

import {
  addressSchema,
  emailSchema,
  nameSchema,
  chickenSchema,
} from "@/screens/schema";

const createSippAccountSchema = () => {
  return object().shape({
    name: nameSchema,
    email: emailSchema,
    address: addressSchema,
    chicken: chickenSchema,
  });
};

export const sippAccountSchema = createSippAccountSchema();

export type SippAccountSchema = InferType<
  ReturnType<typeof createSippAccountSchema>
>;

export const sippAccountNavigation: AccountNavigation[] = [
  {
    routeName: "Address",
    step: 1,
  },
  {
    routeName: "Email",
    step: 1,
  },
  {
    routeName: "Name",
    step: 2,
  },
  {
    routeName: "Chicken",
    step: 3,
  },
];
