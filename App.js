import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, WorkSans_700Bold } from "@expo-google-fonts/work-sans";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <LoginScreen />;
  }
}
