import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import React from "react";
import { Button, Text, View } from "react-native";

type EndScreenProps = AccountNavigatorScreenProps<"End">;

const End = ({ navigation }: EndScreenProps) => {
  const { accountForm, journey, resetAllForms } = useAccountStore();

  const completeJourney = () => {
    resetAllForms();
    navigation.navigate("Start");
  };

  if (!accountForm) {
    return null;
  }

  const values = accountForm.getValues();

  return (
    <View>
      <Text>You have completed the {journey} journey.</Text>

      {Object.keys(values).map((foo) =>
        // @ts-ignore
        Object.keys(values[foo]).map((bar, index) => {
          // @ts-ignore
          const formValue = values[foo][bar];

          return (
            <Text key={index}>
              {bar}: {formValue}
            </Text>
          );
        })
      )}

      <Button onPress={completeJourney} title="Complete" />
    </View>
  );
};

export default End;
