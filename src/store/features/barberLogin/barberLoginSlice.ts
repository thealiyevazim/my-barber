import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { BarberLoginDataResponse } from "~shared";
import { barberLogin } from "./barberLoginThunk";

interface BarberLoginState {
  loading: boolean;
  isRejected: SerializedError;
  loginResponse?: BarberLoginDataResponse;
}

const initialState: BarberLoginState = {
  loginResponse: undefined,
  loading: false,
  isRejected: {},
};

export const barberLoginSlice = createSlice({
  name: "barberLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(barberLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        barberLogin.fulfilled,
        (state, { payload }: PayloadAction<BarberLoginDataResponse>) => {
          state.loading = false;
          state.loginResponse = payload;
        }
      )
      .addCase(barberLogin.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      });
  },
});

export const { actions: barberLoginAction } = barberLoginSlice;
export const { reducer: barberLoginReducer } = barberLoginSlice;
