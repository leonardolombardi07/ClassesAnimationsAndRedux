import { AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";
import {
  LOG_OUT,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from "./types";
import {
  FIRST_ACCESS,
  FACEBOOK_TOKEN,
} from "../../services/AsyncStorage/types";
import { FACEBOOK_APP_ID } from "../../services/Facebook";

export const tryLocalLogIn = () => async (dispatch) => {
  let firstAccess = await AsyncStorage.getItem(FIRST_ACCESS);
  try {
    let token = await AsyncStorage.getItem(FACEBOOK_TOKEN);
    if (token) {
      dispatch({ type: LOG_IN_SUCCESS, payload: token });
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMessage: null,
          firstAccess: firstAccess ? firstAccess : true,
        },
      });
    }
  } catch (e) {
    let firstAccess = await AsyncStorage.getItem(FIRST_ACCESS);
    dispatch({
      type: LOG_IN_FAILURE,
      payload: {
        errorMessage: null,
        firstAccess: firstAccess ? firstAccess : true,
      },
    });
  }
};

export const facebookLogIn = () => async (dispatch) => {
  dispatch({ type: LOG_IN_REQUEST });

  try {
    await Facebook.initializeAsync(FACEBOOK_APP_ID);

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });

    if (type === "cancel") {
      dispatch({ type: LOG_IN_FAILURE, payload: null });
    }

    await AsyncStorage.setItem(FACEBOOK_TOKEN, token);
    await AsyncStorage.setItem(FIRST_ACCESS, false);
    dispatch({ type: LOG_IN_SUCCESS, payload: token });
  } catch (error) {
    let firstAccess = await AsyncStorage.getItem(FIRST_ACCESS);
    dispatch({
      type: LOG_IN_FAILURE,
      payload: {
        errorMessage: null,
        firstAccess: firstAccess ? firstAccess : true,
      },
    });
  }
};

export const logIn = () => ({ type: LOG_IN_SUCCESS, payload: "fakeToken" });

export const logOut = () => async (dispatch) => {
  await AsyncStorage.removeItem(FACEBOOK_TOKEN);
  dispatch({ type: LOG_OUT });
};
