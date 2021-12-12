import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Searchbar } from "react-native-paper";
import mainProfile2 from "./AccountWithName";
import ProfileNameChange from "./ProfileNameChange";
import ProfileEmailChange from "./ProfileEmailChange";
import ProfilePasswordChange from "./ProfilePasswordChange";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function ShopInfo(props) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ProfileHome" component={mainProfile} />
        <Stack.Screen name="ProfileHome2" component={mainProfile2} />
        <Stack.Screen name="NameChange" component={ProfileNameChange} />
        <Stack.Screen name="EmailChange" component={ProfileEmailChange} />
        <Stack.Screen name="PasswordChange" component={ProfilePasswordChange} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function mainProfile({ route, navigation }) {
    //const { name } = route.params;

    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={[
            colors.backgroundtop,
            colors.backgroundmiddle,
            colors.backgroundbottom,
          ]}
          style={styles.background}
        />
        <View style={styles.contentBackground}>
          <MaskedView
            maskElement={
              <LinearGradient
                colors={["black", "black", "transparent"]}
                start={{ x: 0.5, y: 0.87 }}
                style={{ flex: 1 }}
              />
            }
          ></MaskedView>
          <View style={styles.accountIcon}>
            <MaterialCommunityIcons
              name="account-circle"
              size={104}
              color="#474747"
            />
            <Text style={{ fontSize: 20 }}>Timothy Smith</Text>
          </View>
          <TouchableOpacity
            style={styles.optionsContent}
            onPress={() => navigation.navigate("NameChange")}
          >
            <View style={styles.nameContainer}>
              <Ionicons name="md-person-circle" size={39} color="#474747" />
              <Text style={styles.nameTitle}>Name</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionsContent}
            onPress={() => navigation.navigate("EmailChange")}
          >
            <View style={styles.emailContainer}>
              <Ionicons name="md-mail-sharp" size={35} color="#474747" />
              <Text style={styles.optionTitle}>Email</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionsContent}
            onPress={() => navigation.navigate("PasswordChange")}
          >
            <View style={styles.passwordContainer}>
              <Entypo name="key" size={35} color="#474747" />
              <Text style={styles.optionTitle}>Password</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>

        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    zIndex: -10,
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  contentBackground: {
    marginTop: 43,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 500,
    width: "95%",
    height: "93%",
  },
  accountIcon: {
    alignItems: "center",
    marginTop: 35,
    marginBottom: 70,
  },
  optionsContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  optionsContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  optionsContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  optionsContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  pushNotificationsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  optionTitle: { marginRight: "auto", marginLeft: 10 },
  nameTitle: { marginRight: "auto", marginLeft: 6 },
});
