import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { Component, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group";
import { StackParamList } from "../../App";

export default function SetGenderPage() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Male",
        value: "Male",
      },
      {
        id: "2",
        label: "Female",
        value: "Female",
      },
      {
        id: "3",
        label: "Other",
        value: "Other",
      },
    ],
    []
  );

  return (
    <View className=" flex-1 flex-col  justify-between px-10">
      <View className=" mt-40   ">
        <Text className=" text-xl ml-3 font-medium mb-2 ">Gender</Text>

        <RadioGroup
          containerStyle={{ alignItems: "flex-start" }}
          radioButtons={radioButtons}
          onPress={(id) => setSelectedId(id)}
          selectedId={selectedId}
        />
      </View>
      <View className=" flex-row justify-between mb-6">
        <TouchableOpacity
          className=" items-center justify-center bg-buttonColor rounded-md h-10 w-28"
          onPress={() => navigation.navigate("addNamePage")}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" items-center justify-center bg-buttonColor rounded-md h-10 w-28"
          onPress={() => navigation.navigate("AddChildrenPage")}
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
