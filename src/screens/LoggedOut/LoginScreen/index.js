import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { connect } from "react-redux";

import { facebookLogIn, logIn } from "../../../redux/actions";

class LoginScreen extends Component {
  render() {
    const handleClearAsync = async () => {
      await AsyncStorage.clear();
    };

    return (
      <SafeAreaView style={styles.container}>
        <Text>LoginScreen</Text>
        <TouchableOpacity onPress={this.props.facebookLogIn}>
          <Entypo name="facebook" size={28} color="blue" />
        </TouchableOpacity>
        <Button title="Clear AsyncStorage" onPress={handleClearAsync} />
        <Button title="Log In" onPress={this.props.logIn} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(null, { facebookLogIn, logIn })(LoginScreen);
