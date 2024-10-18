import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  addServicesReducer,
  barberAddImagesReducer,
  barberGetMeSliceReducer,
  barberLoginReducer,
  barbersDataSliceReducer,
  barberUpdateReducer,
  clientAvatarUpdateReducer,
  clientGetMeSliceReducer,
  clientLoginReducer,
  clientUpdateReducer,
  getBarbersIdSliceReducer,
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
  barberGetMe: barberGetMeSliceReducer,
  clientGetMe: clientGetMeSliceReducer,
  barberAddImage: barberAddImagesReducer,
  clientAvatarUpdate: clientAvatarUpdateReducer,
  barbersId: getBarbersIdSliceReducer,
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
    'barberGetMe',
    'clientGetMe',
    'barberAddImage',
    'clientAvatarUpdate',
    'barbersId',
  ],
};

export const rootReducer = persistReducer(rootPersistConfig, combinedReducer);
