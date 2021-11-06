import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  WorkSans_700Bold,
  WorkSans_400Regular,
} from "@expo-google-fonts/work-sans";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_700Bold,
    WorkSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Sign-In" component={LoginScreen} />
          <Stack.Screen name="Sign-Up" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
