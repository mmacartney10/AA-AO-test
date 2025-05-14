import { AccountScreenName } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";

export const useNextStep = (currentRoute: AccountScreenName) => {
  const { schemaNavigation } = useAccountStore();

  if (!schemaNavigation) {
    return "Error";
  }

  const currentRouteIndex = schemaNavigation.findIndex(
    (item) => item.routeName === currentRoute
  );

  console.log("------");
  console.log("schemaNavigation", schemaNavigation);
  console.log("currentRoute", currentRoute);
  console.log("currentRouteIndex", currentRouteIndex);

  if (currentRouteIndex === -1) {
    return "Error";
  }

  const isLastRoute = schemaNavigation.length <= currentRouteIndex + 1;

  if (isLastRoute) {
    return "End";
  }

  const nextSchemaNavigation = schemaNavigation[currentRouteIndex + 1];

  return nextSchemaNavigation.routeName;
};
