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
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function ProfileNameChange({ navigation }) {
  const [passwordInput, changePasswordInput] = React.useState(null);
  const [firstNameInput, changeFirstNameInput] = React.useState(null);
  const [lastNameInput, changeLastNameInput] = React.useState(null);
  const [isSecureEntry, changeIsSecureEntry] = React.useState(true);

  // const dispatch = useDispatch();
  // const { acc } = useSelector((state) => state);
  const [formInput, setFormInput] = useState({
    /*set initial credentials to ""*/
    firstName: "",
    lastName: "",
  });

  function inputFirstNameChanged(text) {
    console.log("Name is: " + text);
    /*change the state of the credentials to the name you typed*/
    setFormInput({
      ...formInput,
      firstName: text,
    });
  }

  function inputLastNameChanged(text) {
    /*change the state of the credentials to the name you typed*/
    setFormInput({
      ...formInput,
      lastName: text,
    });
  }

  function verifyPassword(enteredPassword) {
    if (enteredPassword == acc.password) {
      alert("Your name was changed!");
      nameChangeSubmit();
    } else {
      alert("Incorrect password");
    }
  }

  async function nameChangeSubmit() {
    const credentials = {
      _id: acc.id,
      name: formInput.firstName + " " + formInput.lastName,
    };

    console.log("name credentials is " + JSON.stringify(credentials));
    dispatch(editName(credentials));

    console.log(
      "await patchUserInfo: " + JSON.stringify(await patchUserInfo(credentials))
    );

    const response = await patchUserInfo(credentials);

    if (response != null) {
      //here is where you would sync front end and back end
      dispatch(
        editName({
          _id: response._id,
          name: response.name,
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

  function reset() {
    Alert.alert("Name change successful!");
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
            {formInput.firstName == "" ? (
              <View>
                <Text style={styles.headerText}>Name</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ProfileHome");
                  }}
                  style={styles.backButton}
                >
                  <FontAwesome5 name="chevron-left" size={22} color="#A289FF" />
                  <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ProfileHome2", {
                      name: "Drew Smith",
                    });
                  }}
                  style={styles.saveButton}
                >
                  <Text style={styles.saveText}>Confirm</Text>
                  <FontAwesome5
                    name="chevron-right"
                    size={22}
                    color="#A289FF"
                  />
                </TouchableOpacity>
                <Text style={styles.headerText}>Name</Text>
              </View>
            )}
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => inputFirstNameChanged(text)}
              mode="outlined"
              label="New First Name"
              outlineColor="#b1b1b1"
              activeOutlineColor="#000000"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => inputLastNameChanged(text)}
              mode="outlined"
              label="New Last Name"
              outlineColor="#b1b1b1"
              activeOutlineColor="#000000"
            />
            <View style={styles.textAndEyeContainer}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={isSecureEntry}
                mode="outlined"
                onChangeText={changePasswordInput}
                value={passwordInput}
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
            <TouchableOpacity
              //onPress={() => verifyPassword(passwordInput)}
              onPress={() => reset()}
              //onPress={() => Alert.alert("Name change successful!")}
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
    right: 135,
    bottom: 7,
  },
  saveText: {
    fontSize: 17,
    color: "#A289FF",
    paddingRight: 6,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 115,
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
