import RNTextInput from "@/components/RNTextInput";
import { useNextStep } from "@/hooks/useNextStep";
import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import React from "react";
import { Button, Text, View } from "react-native";

type AddressScreenProps = AccountNavigatorScreenProps<"Address">;

const Address = ({ route }: AddressScreenProps) => {
  const { journey, accountForm } = useAccountStore();
  const { nextStep } = useNextStep();

  if (!accountForm) {
    return null;
  }

  return (
    <View>
      <Text>Name: {route.name}</Text>
      <Text>{journey}</Text>
      <RNTextInput
        control={accountForm.control as any}
        name="address.addressLine1"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="address.addressLine2"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="address.addressLine3"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="address.addressLine4"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="address.addressLine5"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="address.countryIso"
      />
      <RNTextInput
        control={accountForm.control as any}
        name="address.postcode"
      />
      <Button onPress={accountForm.handleSubmit(nextStep)} title="Next" />
    </View>
  );
};

export default Address;
