import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { userTypeReducer } from "./features";

const combinedReducer = combineReducers({
  userType: userTypeReducer,
});

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userType"],
};

export const rootReducer = persistReducer(rootPersistConfig, combinedReducer);
