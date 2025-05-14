import { RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Address, Email, Employment, End, Name, Start, Error } from "@/screens";

export type AccountNavigatorParams = {
  Start: undefined;
  Name: undefined;
  Email: undefined;
  Address: undefined;
  Employment: undefined;
  End: undefined;
  Error: undefined;
};

const Stack = createStackNavigator<AccountNavigatorParams>();

export type AccountScreenName = keyof AccountNavigatorParams;

export type AccountNavigationProp<RouteName extends AccountScreenName = never> =
  StackNavigationProp<AccountNavigatorParams, RouteName>;

export type AccountNavigatorScreenProps<RouteName extends AccountScreenName> = {
  navigation: AccountNavigationProp<RouteName>;
  route: RouteProp<AccountNavigatorParams, RouteName>;
};

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Employment" component={Employment} />
      <Stack.Screen name="End" component={End} />
      <Stack.Screen name="Error" component={Error} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;
