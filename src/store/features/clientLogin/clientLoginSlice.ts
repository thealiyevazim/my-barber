import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { ClientLoginDataResponse } from "~shared";
import { clientLogin } from "./clientLoginThunk";

interface ClientLoginState {
  loading: boolean;
  isRejected: SerializedError;
  loginResponse: ClientLoginDataResponse;
}

const initialState: ClientLoginState = {
  loginResponse: {} as ClientLoginDataResponse,
  loading: false,
  isRejected: {},
};

export const clientLoginSlice = createSlice({
  name: "clientLogin",
  initialState,
  reducers: {
    clear: (state) => {
      state.loginResponse = initialState.loginResponse;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(clientLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        clientLogin.fulfilled,
        (state, { payload }: PayloadAction<ClientLoginDataResponse>) => {
          state.loading = false;
          state.loginResponse = payload;
        }
      )
      .addCase(clientLogin.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      });
  },
});

export const { actions: clientLoginAction } = clientLoginSlice;
export const { reducer: clientLoginReducer } = clientLoginSlice;
