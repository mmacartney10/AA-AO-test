import { AccountScreenName } from "@/navigation/AccountNavigation";

export type Journey = "AA" | "AO" | "SIPP";

export interface AccountNavigation {
  routeName: AccountScreenName;
  step: number;
}
