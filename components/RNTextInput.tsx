import React from "react";
import { Text, TextInput, View } from "react-native";

import { AccountOpeningSchema } from "@/schema/AccountOpeningSchema";
import { AddAnAccountSchema } from "@/schema/AddAccountSchema";
import { useController, UseControllerProps } from "react-hook-form";

type FormValues = AddAnAccountSchema & AccountOpeningSchema;

const RNTextInput = (props: UseControllerProps<FormValues>) => {
  const { field } = useController<FormValues>(props);
  const value =
    typeof field.value === "string"
      ? field.value
      : field.value?.toString() ?? "";

  return (
    <View>
      <Text>{props.name}</Text>
      <TextInput
        ref={field.ref}
        style={{
          backgroundColor: "#a3b6d4",
          marginBottom: 20,
        }}
        value={value}
        onChangeText={(newValue) => {
          field.onChange(newValue);
        }}
      />
    </View>
  );
};

export default RNTextInput;
