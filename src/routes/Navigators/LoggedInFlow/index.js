import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import { navigationRef } from "../../RootNavigation";
import LocationScreen from "../../../screens/LoggedIn/LocationScreen";
import RateScreen from "../../../screens/LoggedIn/RateScreen";
import SavedScreenFlow from "./SavedScreenFlow";

const BottomTab = createBottomTabNavigator();
export default class LoggedInFlow extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <BottomTab.Navigator>
          <BottomTab.Screen
            name="LocationScreen"
            component={LocationScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="my-location" size={24} color={color} />
              ),
              tabBarLabel: "Map",
            }}
          />
          <BottomTab.Screen
            name="RateScreen"
            component={RateScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="description" size={24} color={color} />
              ),
              tabBarLabel: "Jobs",
            }}
          />
          <BottomTab.Screen
            name="SavedScreenFlow"
            component={SavedScreenFlow}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="favorite" size={24} color={color} />
              ),
              tabBarLabel: "Saved Jobs",
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
}
