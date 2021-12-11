import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

export default function DiseaseScreen(route, navigation) {
  const { summary } = route.route.params;

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
        <Text>Hello and Welcome to the disease screen!</Text>
        <Text>Summary: {JSON.stringify(summary)}</Text>
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
});
