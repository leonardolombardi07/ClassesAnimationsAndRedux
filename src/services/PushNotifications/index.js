import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { AsyncStorage } from "react-native";

import { PUSH_NOTIFICATIONS_TOKEN } from "../AsyncStorage/types";
import RallyCodingApi from "../apis/RallyCodingApi";

export default async () => {
  try {
    const previousToken = await AsyncStorage.getItem(PUSH_NOTIFICATIONS_TOKEN);

    if (previousToken) {
      return;
    } else {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

      if (status !== "granted") {
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      await RallyCodingApi.post({ token: { token } }); //save on custom backend
      await AsyncStorage.setItem(PUSH_NOTIFICATIONS_TOKEN, token);
      // use expo.io/notifications to test with token
    }
  } catch (error) {
    alert("Some error ocurred... Please try again later");
  }
};
