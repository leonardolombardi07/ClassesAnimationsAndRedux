import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { screenWidth, screenHeigth } from "../constants/dimensions";

export default class WelcomeBoxes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.box,
            { backgroundColor: this.props.index === 1 ? "grey" : "#F5F5F5" },
          ]}
        />
        <View
          style={[
            styles.box,
            { backgroundColor: this.props.index === 2 ? "grey" : "#F5F5F5" },
          ]}
        />
        <View
          style={[
            styles.box,
            { backgroundColor: this.props.index === 3 ? "grey" : "#F5F5F5" },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth * 0.16,
    bottom: screenHeigth * 0.2,
  },
  box: {
    width: screenWidth * 0.04,
    height: screenWidth * 0.04,
    borderWidth: 0.2,
    borderColor: "grey",
    backgroundColor: "#F5F5F5",
  },
});
