import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

export default function AddNamePage() {
  const [name, setName] = useState<string>("");
  const navigate = useNavigation<NativeStackNavigationProp<StackParamList>>();
  return (
    <View className="flex-1 flex-col pt-28 pb-14 px-10  justify-between bg-white">
      <View className=" flex-row items-center justify-center ">
        <View className=" flex-1">
          <Text className=" font-primary  text-lg">Name</Text>
          <View className=" flex-row items-center font-primary pl-4 bg-secondary h-10 w-[90%] border-2 border-primary  rounded-md ">
            <CustomInput
              className=" p-20 text-placeholder "
              value={name}
              onChangeText={setName}
              placeholder="Your name"
              keyboardType="default"
            />
          </View>
        </View>
      </View>

      <View className=" flex-row justify-end  ">
        <TouchableOpacity
          className=" bg-buttonColor h-10 w-28 items-center justify-center rounded-md"
          onPress={() => navigate.navigate("SetGenderPage")}
        >
          <Text className=" font-primary text-lg ">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
