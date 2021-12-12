import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
//import Collapsible from "react-native-collapsible";

export default function DiseaseScreen({ route, navigation }) {
  const { title, summary, equipment, relatedDiseases, symptoms } = route.params;

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
      <View style={styles.scrollView}>
        <ScrollView style={styles.contentBackground}>
          <View style={styles.topRectangle}>
            <TouchableOpacity
              onPress={() => navigation.navigate("DiseaseHome")}
              style={styles.backButton}
            >
              <FontAwesome5
                style={styles.arrow}
                name="chevron-left"
                size={22}
                color="#A289FF"
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.border}>
            <Text style={styles.summaryTitle}>Summary</Text>
          </View>
          <Text>{summary}</Text>
          <View style={styles.margin} />
          <View style={styles.border}>
            <Text style={styles.summaryTitle}>Symptoms</Text>
          </View>
          <Text>{symptoms}</Text>
          <View style={styles.margin} />
          <View style={styles.border}>
            <Text style={styles.summaryTitle}>Treatment</Text>
          </View>
          <Text>{equipment}</Text>
          <View style={styles.margin} />
          <View style={styles.border}>
            <Text style={styles.summaryTitle}>Related Diseases</Text>
          </View>
          <Text>{relatedDiseases}</Text>
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  margin: { marginBottom: 30 },
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
  scrollView: {
    marginTop: 43,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 500,
    width: "95%",
    height: "93%",
  },
  titleText: {
    fontSize: 29,
    color: "#A289FF",
  },
  arrow: {
    width: 24,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  topRectangle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 26,
    color: "#434343",
  },
  border: {
    paddingBottom: 3,
    marginBottom: 10,
    borderBottomColor: "#A289FF",
    borderBottomWidth: 1,
  },
});
