import { AccountScreenName } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";

export const useNextStep = (currentRoute: AccountScreenName) => {
  const { accountNavigation } = useAccountStore();

  if (!accountNavigation) {
    return "Error";
  }

  const currentRouteIndex = accountNavigation.findIndex(
    (item) => item.routeName === currentRoute
  );

  if (currentRouteIndex === -1) {
    return "Error";
  }

  const isLastRoute = accountNavigation.length <= currentRouteIndex + 1;

  if (isLastRoute) {
    return "End";
  }

  const nextAccountNavigation = accountNavigation[currentRouteIndex + 1];

  return nextAccountNavigation.routeName;
};
