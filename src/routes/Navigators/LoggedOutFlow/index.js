import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../../../screens/LoggedOut/WelcomeScreen";
import LoginScreen from "../../../screens/LoggedOut/LoginScreen";

const AuthStack = createStackNavigator();
export default class LoggedOutFlow extends Component {
  render() {
    return (
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={
            this.props.firstAccess === true ? "WelcomeScreen" : "LoginScreen"
          }
        >
          <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}
