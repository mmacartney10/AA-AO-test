import {
  ParamListBase,
  useRoute,
  useNavigation,
} from "@react-navigation/native";
import { useAccountStore } from "@/stores/accountStore";
import { StackNavigationProp } from "@react-navigation/stack";

export const useNextStep = () => {
  const { accountNavigation } = useAccountStore();
  const { name: currentRoute } = useRoute();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const nextStep = () => {
    if (!accountNavigation) {
      navigation.navigate("Error");
      return;
    }

    const currentRouteIndex = accountNavigation.findIndex(
      (item) => item.routeName === currentRoute
    );

    if (currentRouteIndex === -1) {
      navigation.navigate("Error");
      return;
    }

    const isLastRoute = accountNavigation.length <= currentRouteIndex + 1;

    if (isLastRoute) {
      navigation.navigate("End");
      return;
    }

    const { routeName } = accountNavigation[currentRouteIndex + 1];

    navigation.navigate(routeName);
  };

  return {
    nextStep,
  };
};
