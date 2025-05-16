import React from "react";
import { Button, Text, View } from "react-native";

import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";

import RNTextInput from "@/components/RNTextInput";
import { useNextStep } from "@/hooks/useNextStep";

type NameScreenProps = AccountNavigatorScreenProps<"Name">;

const Name = ({ route }: NameScreenProps) => {
  const { journey, accountForm } = useAccountStore();
  const { nextStep } = useNextStep();

  if (!accountForm) {
    return null;
  }

  return (
    <View>
      <Text>Name: {route.name}</Text>
      <Text>{journey}</Text>
      <RNTextInput control={accountForm.control as any} name="name.firstName" />
      <RNTextInput control={accountForm.control as any} name="name.lastName" />
      <Button onPress={accountForm.handleSubmit(nextStep)} title="Next" />
    </View>
  );
};

export default Name;
