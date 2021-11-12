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
import colors from "../config/colors";
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
          <View style={styles.contentBackground2}>
            <Searchbar
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
            />
            <SectionList
              style={styles.sectionList}
              sections={[
                {
                  title: "A",
                  data: [
                    "Acute Flaccid Myelitis (AFM)",
                    "AIDS (HIV/AIDS)",
                    "Alphaviruses",
                    "Alzheimer’s Disease",
                    "Arboviral Encephalitis",
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
              ]}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => Alert.alert("Disease touched")}
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
