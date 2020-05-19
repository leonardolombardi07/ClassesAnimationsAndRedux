import { AsyncStorage } from "react-native";

export const getToken = async (token) => {
  try {
    const token = await AsyncStorage.getItem(token);
    return token;
  } catch (error) {
    return null;
  }
};

export const setToken = async (token) => {
  try {
    const token = await AsyncStorage.setItem(token);
    return token;
  } catch (error) {
    return null;
  }
};
