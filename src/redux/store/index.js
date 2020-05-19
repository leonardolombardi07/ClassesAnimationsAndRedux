import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers/index";

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["jobsData"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  compose(composeEnhancers(applyMiddleware(thunk)))
);
const persistor = persistStore(store);

export { store, persistor };
