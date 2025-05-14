import RNTextInput from "@/components/RNTextInput";
import { useNextStep } from "@/hooks/useNextStep";
import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";

type EmploymentScreenProps = AccountNavigatorScreenProps<"Employment">;

const Employment = ({ navigation, route }: EmploymentScreenProps) => {
  const { accountForm, journey } = useAccountStore();
  const nextRoute = useNextStep("Employment");

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
        name="employment.status"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="employment.occupation"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="employment.businessName"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="employment.institutionName"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="employment.currentEmployer"
      />
      <Button onPress={accountForm.handleSubmit(nextStep)} title="Next" />
    </View>
  );
};

export default Employment;
