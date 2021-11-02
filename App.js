import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  WorkSans_700Bold,
  WorkSans_400Regular,
} from "@expo-google-fonts/work-sans";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_700Bold,
    WorkSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <LoginScreen />;
  }
}
