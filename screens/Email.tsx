import RNTextInput from "@/components/RNTextInput";
import { useNextStep } from "@/hooks/useNextStep";
import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";

type EmailScreenProps = AccountNavigatorScreenProps<"Email">;

const Email = ({ navigation, route }: EmailScreenProps) => {
  const { accountForm, journey } = useAccountStore();
  const nextRoute = useNextStep("Email");

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
        name="email.emailAddress"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="email.confirmation"
      />
      <Button onPress={accountForm.handleSubmit(nextStep)} title="Next" />
    </View>
  );
};

export default Email;
