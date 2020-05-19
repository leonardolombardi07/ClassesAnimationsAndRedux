import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobsReducer from "./jobsReducer";

export default combineReducers({
  authData: authReducer,
  jobsData: jobsReducer,
});
