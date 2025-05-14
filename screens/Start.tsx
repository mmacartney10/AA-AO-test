import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";

import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import { Journey } from "@/types";

type StartScreenProps = AccountNavigatorScreenProps<"Start">;

const Start = ({ navigation }: StartScreenProps) => {
  const { setJourney, schemaNavigation } = useAccountStore();

  const nextPage = (journey: Journey) => {
    setJourney(journey);
  };

  useEffect(() => {
    if (!schemaNavigation) {
      return;
    }

    const nextRoute = schemaNavigation[0].routeName;
    navigation.navigate(nextRoute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schemaNavigation]);

  return (
    <View>
      <Text>Start</Text>
      <Button onPress={() => nextPage("AA")} title="AA Journey" />
      <Button onPress={() => nextPage("AO")} title="AO Journey" />
    </View>
  );
};

export default Start;
