/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";

import { AccountNavigatorScreenProps } from "@/navigation/AccountNavigation";
import { useAccountStore } from "@/stores/accountStore";
import { Journey } from "@/types";

type StartScreenProps = AccountNavigatorScreenProps<"Start">;

const Start = ({ navigation }: StartScreenProps) => {
  const { setJourney, accountNavigation, resetAllForms } = useAccountStore();

  const nextPage = (journey: Journey) => {
    setJourney(journey);
  };

  useEffect(() => {
    if (!accountNavigation) {
      return;
    }

    const nextRoute = accountNavigation[0].routeName;
    navigation.navigate(nextRoute);
  }, [accountNavigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      resetAllForms();
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>Start</Text>
      <Button onPress={() => nextPage("AA")} title="AA Journey" />
      <Button onPress={() => nextPage("AO")} title="AO Journey" />
      <Button onPress={() => nextPage("SIPP")} title="SIPP Journey" />
    </View>
  );
};

export default Start;
