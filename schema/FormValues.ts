import { AccountOpeningSchema } from "./AccountOpeningSchema";
import { AddAnAccountSchema } from "./AddAccountSchema";
import { SippAccountSchema } from "./SippAccountSchema";

export type FormValues = AddAnAccountSchema &
  AccountOpeningSchema &
  SippAccountSchema;
