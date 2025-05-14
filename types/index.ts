import { AccountScreenName } from "@/navigation/AccountNavigation";

export type Journey = "AA" | "AO";

export interface AccountNavigation {
  routeName: AccountScreenName;
  step: number;
}
