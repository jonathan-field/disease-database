import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
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
                  placeholder: "black",
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
                  placeholder: "black",
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
                placeholder: "black",
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
                placeholder: "black",
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
                placeholder: "black",
                text: "black",
                primary: "black",
              },
            }}
          />
          <Button
            style={{
              alignSelf: "center",
              width: 252.29,
              marginTop: 20,
              marginBottom: 6,
            }}
            mode="contained"
            onPress={() => Alert.alert("Log in with Email pressed")}
            color="#9986F9"
            dark
          >
            <Text style={{ fontFamily: "WorkSans_400Regular" }}>
              Log in with Email
            </Text>
          </Button>
          <Text style={styles.or}>OR</Text>
          <Button
            icon="google"
            style={styles.button}
            mode="contained"
            onPress={() => Alert.alert("Log in with Google pressed")}
            color="#F5F5F5"
          >
            <Text
              style={{
                fontFamily: "WorkSans_400Regular",
                fontSize: 13,
              }}
            >
              Log in with Google
            </Text>
          </Button>
          <Button
            icon="twitter"
            style={styles.button}
            mode="contained"
            onPress={() => Alert.alert("Log in with Twitter pressed")}
            color="#1DA1F2"
            dark
          >
            <Text style={{ fontFamily: "WorkSans_400Regular", fontSize: 13 }}>
              Log in with Twitter
            </Text>
          </Button>
          <Button
            icon="facebook"
            style={styles.button}
            mode="contained"
            onPress={() => Alert.alert("Log in with Facebook pressed")}
            color="#1877F2"
            dark
          >
            <Text style={{ fontFamily: "WorkSans_400Regular", fontSize: 13 }}>
              Log in with Facebook
            </Text>
          </Button>
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
                Sign up
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
