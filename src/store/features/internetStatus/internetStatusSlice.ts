import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOnline: true,
};

export const internetStatusSlice = createSlice({
  initialState,
  name: "internetStatus",
  reducers: {
    setOffline: (state) => {
      state.isOnline = false;
    },
    setOnline: (state) => {
      state.isOnline = true;
    },
  },
});

export const { actions: internetStatusActions } = internetStatusSlice;
export const { reducer: internetStatusReducer } = internetStatusSlice;
