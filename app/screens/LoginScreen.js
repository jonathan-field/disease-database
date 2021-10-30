import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen(props) {
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
        <Text style={styles.title}>Disease Database</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#676767"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#676767"
        />
      </View>
      <View style={styles.backgroundImage}>
        <Image
          resizeMode="contain"
          source={require("../assets/loginBackground.png")}
        />
      </View>
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
  backgroundImage: {
    position: "absolute",
    zIndex: -1,
    bottom: 0,
  },
  contentBackground: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#2D428D52",
    borderRadius: 20,
    height: 488,
    width: 324,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 33,
    fontWeight: "bold",
    fontFamily: "WorkSans_700Bold",
    color: "#fff",
  },
  input: {
    height: 40,
    width: 271,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 8,
  },
});
