import { createSlice } from "@reduxjs/toolkit";
import { UserTypesEnum } from "~enums";
import { UserType } from "./types";

const initialState: UserType = {
  userType: UserTypesEnum.Barber || UserTypesEnum.Client,
};

export const userTypeSlice = createSlice({
  name: "userType",
  initialState,
  reducers: {
    setUserType: (state, { payload }) => {
      state.userType = payload;
    },
  },
});

export const { setUserType } = userTypeSlice.actions;
export const userTypeReducer = userTypeSlice.reducer;
