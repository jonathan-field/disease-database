import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Searchbar } from "react-native-paper";

export default function ShopInfo(props) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

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
        >
          <View style={styles.contentBackground2}></View>
        </MaskedView>
        <View style={styles.accountIcon}>
          <MaterialCommunityIcons
            name="account-circle"
            size={104}
            color="#007AFF"
          />
          <Text style={{ fontSize: 20 }}>Timothy Smith</Text>
        </View>
        <View style={styles.optionsContent}>
          <View style={styles.nameContainer}>
            <MaterialCommunityIcons name="account-circle-outline" size={42} />
            <Text style={styles.optionTitle}>Name</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
        </View>
        <View style={styles.optionsContent}>
          <View style={styles.emailContainer}>
            <AntDesign name="mail" size={35} color="black" />
            <Text style={styles.optionTitle}>Email</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
        </View>
        <View style={styles.optionsContent}>
          <View style={styles.passwordContainer}>
            <Entypo name="key" size={35} color="black" />
            <Text style={styles.optionTitle}>Password</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
        </View>
        <View style={styles.optionsContent}>
          <View style={styles.pushNotificationsContainer}>
            <FontAwesome name="bell" size={35} color="black" />
            <Text style={styles.optionTitle}>Push Notifications</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
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
});
