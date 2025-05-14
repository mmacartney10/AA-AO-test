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

export const accountOpeningDefaultState: AccountOpeningSchema = {
  email: {
    confirmation: "",
    emailAddress: "",
  },
  name: {
    firstName: "",
    lastName: "",
    title: "Mr",
  },
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
