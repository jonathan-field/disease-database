import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiseaseScreen from "./DiseaseScreen";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Searchbar } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function Diseases(props) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DiseaseHome" component={mainScreen} />
        <Stack.Screen name="DiseaseScreen" component={DiseaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function mainScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    const DISEASES = [
      {
        title: "A",
        data: [
          "Acute Flaccid Myelitis",
          "AIDS (HIV/AIDS)",
          "Alphaviruses",
          "Alzheimer’s Disease",
          "Arboviral Encephalitis",
        ],
        info: [
          {
            summary: [
              "Acute Flaccid Myelitis (AFM) is bad",
              "AIDS (HIV/AIDS) is not preferrable",
              "Alphaviruses are the worse",
              "Alzheimer’s Disease makes you forget",
              "Arboviral Encephalitis is viral!",
            ],
          },
        ],
      },
      {
        title: "B",
        data: [
          "Babesiois",
          "Bacterial Vaginosis",
          "Bartonella Infection",
          "Bilharzia",
          "Bird Flu",
          "Blue-green Algae",
        ],
        info: [
          {
            summary: [
              "Babesiois is b-b-babe",
              "Bacterial Vaginosis is bacterial up the nose!",
              "Bartonella Infection actually isn't the worse in the world",
              "Bilharzia is bizarre",
              "Bird Flu spreads like the Flu!",
              "No place is safe if there is Blue-green Algae",
            ],
          },
        ],
      },
      {
        title: "C",
        data: [
          "Cancer",
          "Cancer - Bladder",
          "Cancer - Breast",
          "Cancer - Cervical",
        ],
      },
    ];
    /*
  const state = { 

        name: "Acute Flaccid Myelitis (AFM)",
        info: [
          {
            description: "This disease is bad",
          },
        ],
    ],
  };
  */
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
            <View style={styles.contentBackground2}>
              {/* <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                theme={{
                  colors: {
                    placeholder: "gray",
                    text: "black",
                    primary: "#007AFF",
                  },
                }}
                style={styles.searchBar}
              /> */}
              <SectionList
                style={styles.sectionList}
                sections={DISEASES}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index, section }) => (
                  <TouchableOpacity
                    onPress={() => {
                      // console.log(
                      //   "Summary of " +
                      //     item +
                      //     " is the following " +
                      //     DISEASES[
                      //       DISEASES.findIndex(function (disease) {
                      //         return disease.title === section.title;
                      //       })
                      //     ].info[0].summary[index]
                      // ),
                      navigation.navigate("DiseaseScreen", {
                        title: item,
                        summary:
                          DISEASES[
                            DISEASES.findIndex(function (disease) {
                              return disease.title === section.title;
                            })
                          ].info[0].summary[index],
                      });
                      // console.log(
                      //   "Disease title index is: " +
                      //     DISEASES.findIndex(function (disease) {
                      //       return disease.title === section.title;
                      //     })
                      // );
                      // console.log("index is " + index);
                      // console.log("Title of disease is " + item);
                      // console.log("Disease title touched " + section.title);
                      // console.log(
                      //   "To display summary of Flaccid" +
                      //     DISEASES[0].info[0].summary[0]
                      // );
                    }}
                  >
                    <Text style={styles.item}>{item}</Text>
                  </TouchableOpacity>
                )}
                renderSectionHeader={({ section }) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={(props) => {
                  //console.log("props", props); // here you can access the trailingItem with props.trailingItem
                  return (
                    <View
                      style={{
                        height: 1,
                        width: "96%",
                        backgroundColor: "#EBEBEB",
                        alignSelf: "center",
                      }}
                    />
                  );
                }}
              />
            </View>
          </MaskedView>
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
  contentBackground2: {
    borderRadius: 10,
    height: 500,
    width: "100%",
    height: "100%",
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    width: "90%",
    height: 40,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: "center",
  },
  sectionList: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    color: "#323232",
    backgroundColor: "#F1F1F1",
  },
  item: {
    padding: 10,
    paddingLeft: 15,
    fontSize: 18,
    height: 44,
    fontFamily: "Inter_500Medium",
  },
  linearGradient: {
    width: 75,
    height: 75,
  },
});
