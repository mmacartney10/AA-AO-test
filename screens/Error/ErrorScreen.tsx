import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import React from "react";
import { Button, Text, View } from "react-native";

type ErrorScreenProps = AccountNavigatorScreenProps<"Error">;

const Error = ({ navigation }: ErrorScreenProps) => {
  const { resetAllForms, setJourney } = useAccountStore();

  const goToStart = () => {
    resetAllForms();
    setJourney(null);
    navigation.navigate("Start");
  };

  return (
    <View>
      <Text>Oh no, you have pooed in your trousers.</Text>
      <Button onPress={goToStart} title="Complete" />
    </View>
  );
};

export default Error;
