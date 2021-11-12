import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  WorkSans_700Bold,
  WorkSans_400Regular,
} from "@expo-google-fonts/work-sans";
import { Inter_500Medium, Inter_600SemiBold } from "@expo-google-fonts/inter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import Account from "./app/screens/Account";
import Diseases from "./app/screens/Diseases";
import Teleconference from "./app/screens/Teleconference";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    WorkSans_700Bold,
    WorkSans_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Sign-In" component={LoginScreen} />
          <Stack.Screen name="Sign-Up" component={RegisterScreen} />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function Main() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "account-circle" : "account-circle";

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Diseases"
        component={Diseases}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "disease" : "disease";

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Teleconference"
        component={Teleconference}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "phone-alt" : "phone-alt";

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
}
