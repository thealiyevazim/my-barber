import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { ClientLoginDataResponse, ClientUpdateDataResponse } from '~shared';
import { clientLogin } from './clientLoginThunk';
import { clientUpdate } from '../clientUpdate';

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
  name: 'clientLogin',
  initialState,
  reducers: {
    clear: state => {
      state.loginResponse = initialState.loginResponse;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(clientLogin.pending, state => {
        state.loading = true;
      })
      .addCase(
        clientLogin.fulfilled,
        (state, { payload }: PayloadAction<ClientLoginDataResponse>) => {
          state.loading = false;
          console.log(payload);
          state.loginResponse = payload;
        },
      )
      .addCase(clientLogin.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      })
      .addCase(
        clientUpdate.fulfilled,
        (state, { payload }: PayloadAction<ClientUpdateDataResponse>) => {
          state.loginResponse.data.client.full_name = payload.data.full_name;
          state.loginResponse.data.client.phone = payload.data.phone;
        },
      );
  },
});

export const { actions: clientLoginAction } = clientLoginSlice;
export const { reducer: clientLoginReducer } = clientLoginSlice;
