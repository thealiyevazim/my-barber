import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  barberLoginReducer,
  clientLoginReducer,
  internetStatusReducer,
  userTypeReducer,
} from './features';

const combinedReducer = combineReducers({
  userType: userTypeReducer,
  internetStatus: internetStatusReducer,
  barberLogin: barberLoginReducer,
  clientLogin: clientLoginReducer,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userType', 'internetStatus', 'barberLogin', 'clientLogin'],
};

export const rootReducer = persistReducer(rootPersistConfig, combinedReducer);
