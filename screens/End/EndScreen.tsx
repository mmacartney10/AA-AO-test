import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { AccountOpeningSchema } from "@/schema/AccountOpeningSchema";
import { AddAnAccountSchema } from "@/schema/AddAccountSchema";
import { useAccountStore } from "@/stores/accountStore";
import React from "react";
import { Button, Text, View } from "react-native";

type EndScreenProps = AccountNavigatorScreenProps<"End">;

const EndAA = () => {
  const { accountForm } = useAccountStore();

  if (!accountForm) {
    return null;
  }

  const values = accountForm.getValues() as AddAnAccountSchema;

  return (
    <View>
      <Text>{values.employment.businessName}</Text>
      <Text>{values.employment.currentEmployer}</Text>
      <Text>{values.employment.institutionName}</Text>
      <Text>{values.employment.occupation}</Text>
      <Text>{values.employment.status}</Text>

      <Text>{values.address.addressLine1}</Text>
      <Text>{values.address.addressLine2}</Text>
      <Text>{values.address.addressLine3}</Text>
      <Text>{values.address.addressLine4}</Text>
      <Text>{values.address.addressLine5}</Text>
      <Text>{values.address.countryIso}</Text>
      <Text>{values.address.postcode}</Text>
    </View>
  );
};

const EndAO = () => {
  const { accountForm } = useAccountStore();

  if (!accountForm) {
    return null;
  }

  const values = accountForm.getValues() as AccountOpeningSchema;

  return (
    <View>
      <Text>{values.name.firstName}</Text>
      <Text>{values.name.lastName}</Text>

      <Text>{values.email.emailAddress}</Text>
      <Text>{values.email.confirmation}</Text>

      <Text>{values.employment.businessName}</Text>
      <Text>{values.employment.currentEmployer}</Text>
      <Text>{values.employment.institutionName}</Text>
      <Text>{values.employment.occupation}</Text>
      <Text>{values.employment.status}</Text>

      <Text>{values.address.addressLine1}</Text>
      <Text>{values.address.addressLine2}</Text>
      <Text>{values.address.addressLine3}</Text>
      <Text>{values.address.addressLine4}</Text>
      <Text>{values.address.addressLine5}</Text>
      <Text>{values.address.countryIso}</Text>
      <Text>{values.address.postcode}</Text>
    </View>
  );
};

const End = ({ navigation }: EndScreenProps) => {
  const { accountForm, journey, resetAllForms, setJourney } = useAccountStore();

  const completeJourney = () => {
    resetAllForms();
    setJourney(null);
    navigation.navigate("Start");
  };

  if (!accountForm) {
    return null;
  }

  return (
    <View>
      <Text>You have completed the {journey} journey.</Text>
      {journey === "AA" ? <EndAA /> : <EndAO />}
      <Button onPress={completeJourney} title="Complete" />
    </View>
  );
};

export default End;
