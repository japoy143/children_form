import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddNamePage,
  SetGenderPage,
  ChildrenListPage,
  CreateAccountPage,
} from "./screens/export";
import { useFonts } from "expo-font";

export type StackParamList = {
  addNamePage: undefined;
  SetGenderPage: undefined;
  AddChildrenPage: undefined;
  CreateAccountPage: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Rubik: require("./assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) return undefined;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="addNamePage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="addNamePage" component={AddNamePage} />
        <Stack.Screen name="SetGenderPage" component={SetGenderPage} />
        <Stack.Screen name="AddChildrenPage" component={ChildrenListPage} />
        <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
