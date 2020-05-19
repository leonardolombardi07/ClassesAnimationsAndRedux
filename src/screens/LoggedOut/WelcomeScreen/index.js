import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import Slides from "../../../components/Slides";

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.SLIDE_DATA = [
      { text: "Welcome to Job App", index: 1 },
      { text: "Use this to get a job", index: 2 },
      { text: "Set your location then swipe away", index: 3 },
    ];
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Slides data={this.SLIDE_DATA} navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
