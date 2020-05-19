import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

import { logOut, resetSavedJobs } from "../../../redux/actions";

class SettingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.buttonStyle}>
          <Button title="Logout" onPress={this.props.logOut} />
        </View>
        <View style={[styles.buttonStyle, { left: null, right: 10 }]}>
          <Button
            title="Clear Saved Jobs"
            onPress={this.props.resetSavedJobs}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  buttonStyle: {
    position: "absolute",
    bottom: 20,
    left: 10,
    width: 150,
  },
});

export default connect(null, { logOut, resetSavedJobs })(SettingsScreen);
