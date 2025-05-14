import { AccountScreenName } from "@/navigation/AccountNavigation";

export type Journey = "AA" | "AO";
export type J = "SIPP" | "ISA";

export interface FormValues {
  name: {
    title: string;
    firstName: string;
    lastName: string;
  };
  email: {
    emailAddress: string;
    confirmation: string;
  };
  employment: {
    status: string;
    occupation: string;
    businessName: string;
    institutionName: string;
    currentEmployer: string;
  };
  address: {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    countryIso: string;
    postcode: string;
  };
}

export interface SchemaNavigation {
  routeName: AccountScreenName;
  step: number;
}
