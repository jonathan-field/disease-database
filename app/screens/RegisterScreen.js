import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, Button } from "react-native-paper";
import MaskedView from "@react-native-masked-view/masked-view";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function LoginScreen({ navigation }) {
  return (
    <DismissKeyboard>
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
            style={{ flex: 1, flexDirection: "row" }}
            maskElement={
              <View>
                <Text style={styles.title}>Disease Database</Text>
              </View>
            }
          >
            <LinearGradient
              colors={[
                colors.backgroundtop,
                colors.backgroundmiddle,
                colors.backgroundbottom,
              ]}
              start={{ x: 0.6, y: 0 }}
              end={{ x: 0, y: 0 }}
              style={{ flex: 1 }}
            />
          </MaskedView>
          <View style={styles.nameContainer}>
            <TextInput
              onPress={Keyboard.dismiss}
              style={styles.nameInput}
              mode="outlined"
              label="First Name"
              theme={{
                colors: {
                  placeholder: "#676767",
                  text: "black",
                  primary: "black",
                },
              }}
            />
            <TextInput
              onPress={Keyboard.dismiss}
              style={styles.nameInput}
              mode="outlined"
              label="Last Name"
              theme={{
                colors: {
                  placeholder: "#676767",
                  text: "black",
                  primary: "black",
                },
              }}
            />
          </View>
          <TextInput
            onPress={Keyboard.dismiss}
            style={styles.input}
            mode="outlined"
            label="Email"
            theme={{
              colors: {
                placeholder: "#676767",
                text: "black",
                primary: "black",
              },
            }}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Password"
            theme={{
              colors: {
                placeholder: "#676767",
                text: "black",
                primary: "black",
              },
            }}
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Re-enter Password"
            theme={{
              colors: {
                placeholder: "#676767",
                text: "black",
                primary: "black",
              },
            }}
          />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: 252.29,
              marginTop: 20,
              marginBottom: 6,
            }}
            onPress={() => navigation.navigate("Main")}
          >
            <Button mode="contained" color="#9986F9" dark>
              <Text style={{ fontFamily: "WorkSans_400Regular" }}>
                Log in with Email
              </Text>
            </Button>
          </TouchableOpacity>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Log in with Google pressed")}
          >
            <Button icon="google" mode="contained" color="#F5F5F5">
              <Text
                style={{
                  fontFamily: "WorkSans_400Regular",
                  fontSize: 13,
                }}
              >
                Log in with Google
              </Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Log in with Twitter pressed")}
          >
            <Button icon="twitter" mode="contained" color="#1DA1F2" dark>
              <Text style={{ fontFamily: "WorkSans_400Regular", fontSize: 13 }}>
                Log in with Twitter
              </Text>
            </Button>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Log in with Facebook pressed")}
          >
            <Button icon="facebook" mode="contained" color="#1877F2" dark>
              <Text style={{ fontFamily: "WorkSans_400Regular", fontSize: 13 }}>
                Log in with Facebook
              </Text>
            </Button>
          </TouchableOpacity>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 14,
                alignSelf: "center",
              }}
            >
              Have an account?{" "}
              <Text
                style={styles.hyperlinktext}
                onPress={() => navigation.navigate("Sign-In")}
              >
                Log in
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.backgroundImage}>
          <Image
            resizeMode="contain"
            source={require("../assets/loginBackground.png")}
          />
        </View>
        <StatusBar style="light" />
      </View>
    </DismissKeyboard>
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
    //backgroundColor: "#2D428D52",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    height: 600,
    width: 324,
  },
  title: {
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 33,
    fontFamily: "WorkSans_700Bold",
    color: "#000000",
  },
  nameContainer: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
  },
  nameInput: {
    height: 40,
    margin: 4,
    backgroundColor: "#fff",
    flex: 1,
  },
  input: {
    height: 40,
    width: "92.45%",
    margin: 4,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  forgotpassword: {
    left: 15,
    color: "#616161",
  },
  or: {
    fontFamily: "WorkSans_700Bold",
    fontSize: 23,
    margin: 3,
    textAlign: "center",
  },
  button: {
    width: 252.29,
    margin: 6,
    alignSelf: "center",
    fontFamily: "WorkSans_400Regular",
  },
  hyperlinktext: {
    color: "#0067C6",
    textDecorationLine: "underline",
  },
});
