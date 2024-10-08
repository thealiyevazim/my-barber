import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './types';

const initialState: UserType = {
  userType: undefined,
};

export const userTypeSlice = createSlice({
  name: 'userType',
  initialState,
  reducers: {
    clear: state => {
      state.userType = initialState.userType;
    },
    setUserType: (state, { payload }) => {
      state.userType = payload;
    },
  },
});

export const { actions: userTypeActions } = userTypeSlice;
export const userTypeReducer = userTypeSlice.reducer;
