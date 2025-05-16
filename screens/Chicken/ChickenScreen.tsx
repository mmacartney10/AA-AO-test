import RNTextInput from "@/components/RNTextInput";
import { useNextStep } from "@/hooks/useNextStep";
import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";

type AddressScreenProps = AccountNavigatorScreenProps<"Chicken">;

const Chicken = ({ navigation, route }: AddressScreenProps) => {
  const { journey, accountForm } = useAccountStore();
  const nextRoute = useNextStep();

  const nextStep = useCallback(async () => {
    navigation.navigate(nextRoute);
  }, [navigation, nextRoute]);

  if (!accountForm) {
    return null;
  }

  return (
    <View>
      <Text>Name: {route.name}</Text>
      <Text>{journey}</Text>
      <RNTextInput
        control={accountForm.control as any}
        name="chicken.doYouLikeChicken"
      />
      <Button onPress={accountForm.handleSubmit(nextStep)} title="Next" />
    </View>
  );
};

export default Chicken;
