import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  addServicesReducer,
  barberLoginReducer,
  barbersDataSliceReducer,
  barberUpdateReducer,
  clientLoginReducer,
  clientUpdateReducer,
  internetStatusReducer,
  servicesSliceReducer,
  userTypeReducer,
} from './features';

const combinedReducer = combineReducers({
  userType: userTypeReducer,
  internetStatus: internetStatusReducer,
  barberLogin: barberLoginReducer,
  clientLogin: clientLoginReducer,
  barberUpdate: barberUpdateReducer,
  clientUpdate: clientUpdateReducer,
  barberService: servicesSliceReducer,
  barbersData: barbersDataSliceReducer,
  addServices: addServicesReducer,
});

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'userType',
    'internetStatus',
    'barberLogin',
    'clientLogin',
    'barberUpdate',
    'barberService',
    'clientUpdate',
    'barbersData',
    'addServices',
  ],
};

export const rootReducer = persistReducer(rootPersistConfig, combinedReducer);
