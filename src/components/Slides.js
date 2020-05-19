import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text, Button } from "react-native";

import WelcomeBoxes from "../components/WelcomeBoxes";
import { screenWidth, screenHeigth } from "../constants/dimensions";

export default class Slides extends Component {
  renderSlides() {
    return this.props.data.map((slide) => (
      <View key={slide.text} style={styles.slideContainer}>
        <Text style={styles.slideText}>{slide.text}</Text>
        {slide.index === 3 ? (
          <Button
            title="I'm ready"
            onPress={() => this.props.navigation.navigate("LoginScreen")}
          />
        ) : null}
        <WelcomeBoxes index={slide.index} />
      </View>
    ));
  }
  render() {
    return (
      <ScrollView
        horizontal={true}
        style={styles.scrollViewStyle}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
    padding: 10,
  },
  slideText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 15,
  },
});
