import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, Alert } from "react-native";
import { Notifications } from "expo";
import { connect } from "react-redux";

import { tryLocalLogIn } from "../../../redux/actions";
import registerForNotifications from "../../../services/PushNotifications";

class SplashScreen extends Component {
  componentDidMount() {
    this.props.tryLocalLogIn();
    registerForNotifications();
    Notifications.addListener((notification) => {
      const {
        data: { text },
        origin,
      } = notification;

      if (origin === "received" && text) {
        Alert.alert("New Push Notification", text, [{ text: "Ok" }]);
      }
    });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>SplashScreen </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { tryLocalLogIn })(SplashScreen);
