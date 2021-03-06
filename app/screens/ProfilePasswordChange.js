import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function ProfilePasswordChange({ navigation }) {
  const [currentPasswordInput, changeCurrentPasswordInput] =
    React.useState(null);
  const [newPasswordInput, changeNewPasswordInput] = React.useState(null);
  const [reEnterPasswordInput, changeReEnterPasswordInput] =
    React.useState(null);
  const [isSecureEntry, changeIsSecureEntry] = React.useState(true);
  const [isSecureEntry2, changeIsSecureEntry2] = React.useState(true);
  const [isSecureEntry3, changeIsSecureEntry3] = React.useState(true);

  // const dispatch = useDispatch();
  // const { acc } = useSelector((state) => state);
  const [formInput, setFormInput] = useState({
    /*set initial credentials to ""*/
    password: "",
  });

  function inputPasswordChanged(text) {
    console.log("Text is: " + text);
    /*change the state of the credentials to the name you typed*/
    setFormInput({
      ...formInput,
      password: text,
    });
  }

  function verifyPassword(enteredPassword, confirmPassword) {
    console.log("acc.password is: " + acc.password);

    if (enteredPassword == acc.password) {
      if (formInput.password == confirmPassword) {
        alert("Passwords match, Your password was changed!");
        passwordChangeSubmit();
      } else {
        alert("Current password is correct but new passwords don't match");
      }
    } else {
      alert("Incorrect current password");
    }
  }

  async function passwordChangeSubmit() {
    console.log(formInput.password);
    const credentials = {
      _id: acc.id,
      password: formInput.password,
    };

    dispatch(editPassword(credentials));

    const response = await patchUserInfo(credentials);

    if (response != null) {
      //here is where you would sync front end and back end
      dispatch(
        editPassword({
          _id: response._id,
          password: response.password,
        })
      );
    } else {
      alert("Server might be out of sync with recent changes");
    }
  }

  function eyeState() {
    if (isSecureEntry == true) {
      return <Ionicons name="eye" size={24} color="black" />;
    } else if (isSecureEntry == false) {
      return <Ionicons name="eye-off" size={24} color="black" />;
    }
  }

  function eyeState2() {
    if (isSecureEntry2 == true) {
      return <Ionicons name="eye" size={24} color="black" />;
    } else if (isSecureEntry2 == false) {
      return <Ionicons name="eye-off" size={24} color="black" />;
    }
  }

  function eyeState3() {
    if (isSecureEntry3 == true) {
      return <Ionicons name="eye" size={24} color="black" />;
    } else if (isSecureEntry3 == false) {
      return <Ionicons name="eye-off" size={24} color="black" />;
    }
  }

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
          <View style={styles.topRectangle}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileHome")}
              style={styles.backButton}
            >
              <FontAwesome5 name="chevron-left" size={22} color="#A289FF" />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Password</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.textAndEyeContainer}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={isSecureEntry}
                mode="outlined"
                onChangeText={changeCurrentPasswordInput}
                value={currentPasswordInput}
                label="Current Password"
                outlineColor="#b1b1b1"
                activeOutlineColor="#000000"
                numberOfLines={1}
              />
              <TouchableOpacity
                onPress={() => {
                  changeIsSecureEntry((prev) => !prev);
                }}
                style={styles.eyeContainer}
              >
                {eyeState()}
              </TouchableOpacity>
            </View>

            <View style={styles.textAndEyeContainer}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={isSecureEntry2}
                mode="outlined"
                onChangeText={(text) => inputPasswordChanged(text)}
                label="New Password"
                outlineColor="#b1b1b1"
                activeOutlineColor="#000000"
                numberOfLines={1}
              />
              <TouchableOpacity
                onPress={() => {
                  changeIsSecureEntry2((prev) => !prev);
                }}
                style={styles.eyeContainer}
              >
                {eyeState2()}
              </TouchableOpacity>
            </View>

            <View style={styles.textAndEyeContainer}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={isSecureEntry3}
                mode="outlined"
                onChangeText={changeReEnterPasswordInput}
                value={reEnterPasswordInput}
                label="Re-enter New Password"
                outlineColor="#b1b1b1"
                activeOutlineColor="#000000"
                numberOfLines={1}
              />
              <TouchableOpacity
                onPress={() => {
                  changeIsSecureEntry3((prev) => !prev);
                }}
                style={styles.eyeContainer}
              >
                {eyeState3()}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              // onPress={() =>
              //   verifyPassword(currentPasswordInput, reEnterPasswordInput)
              // }
              onPress={() => Alert.alert("Password change successful!")}
              style={styles.signUpButton}
            >
              <Text
                style={{ fontSize: 20, color: "#fff", textAlign: "center" }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
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
  contentBackground: {
    marginTop: 43,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 500,
    width: "95%",
    height: "93%",
  },
  topRectangle: {
    width: "100%",
    height: "7.4%",
    backgroundColor: colors.primary,
    alignItems: "center",
  },
  backText: {
    fontSize: 17,
    color: "#A289FF",
    paddingLeft: 6,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 20,
    bottom: 7,
  },
  headerText: {
    fontSize: 20,
    marginTop: 21,
    marginBottom: 4,
    color: "#A289FF",
    fontFamily: "WorkSans_700Bold",
  },
  content: {
    alignItems: "center",
    marginTop: "5%",
  },
  title: {
    marginTop: 20,
    fontSize: 48,
    fontWeight: "bold",
  },
  textInput: {
    width: 280,
    height: 55,
    backgroundColor: "#FCFCFC",
    lineHeight: 40,
    marginBottom: 15,
  },
  textAndEyeContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "relative",
  },
  eyeContainer: {
    position: "absolute",
    height: "40%",
    width: "10%",
    top: 22,
    right: 6,
    zIndex: 300,
    backgroundColor: "#FCFCFC",
  },
  signUpButton: {
    height: 45,
    width: 220,
    marginTop: -10,
    backgroundColor: "#9986F9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "center",
    marginTop: 15,
  },
  forgotPassword: {
    fontSize: 13.3,
    color: "#555555",
  },
});
