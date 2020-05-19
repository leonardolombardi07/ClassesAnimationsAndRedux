import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";

import SavedJobsScreen from "../../../../screens/LoggedIn/SavedJobsScreen";
import SettingsScreen from "../../../../screens/LoggedIn/SettingsScreen";

const SavedScreenStack = createStackNavigator();
export default class SavedScreenFlow extends Component {
  render() {
    return (
      <SavedScreenStack.Navigator>
        <SavedScreenStack.Screen
          name="SavedJobsScreen"
          component={SavedJobsScreen}
          options={{
            headerTitleAlign: "center",
            headerTitle: "Saved Jobs",
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => this.props.navigation.navigate("SettingsScreen")}
              >
                <Text style={{ color: "blue" }}>Settings</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <SavedScreenStack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
        />
      </SavedScreenStack.Navigator>
    );
  }
}
