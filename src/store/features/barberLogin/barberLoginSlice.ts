import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { BarberLoginDataResponse, BarberUpdateDataResponse } from '~shared';
import { barberLogin } from './barberLoginThunk';
import { barberUpdate } from '../barberUpdate';

interface BarberLoginState {
  loading: boolean;
  isRejected: SerializedError;
  loginResponse: BarberLoginDataResponse;
}

const initialState: BarberLoginState = {
  loginResponse: {} as BarberLoginDataResponse,
  loading: false,
  isRejected: {},
};

export const barberLoginSlice = createSlice({
  name: 'barberLogin',
  initialState,
  reducers: {
    clear: state => {
      state.loginResponse = initialState.loginResponse;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(barberLogin.pending, state => {
        state.loading = true;
      })
      .addCase(
        barberLogin.fulfilled,
        (state, { payload }: PayloadAction<BarberLoginDataResponse>) => {
          state.loading = false;
          state.loginResponse = payload;
        },
      )
      .addCase(barberLogin.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      })
      .addCase(
        barberUpdate.fulfilled,
        (state, { payload }: PayloadAction<BarberUpdateDataResponse>) => {
          state.loginResponse.data.barber.full_name = payload.data.full_name;
          state.loginResponse.data.barber.phone = payload.data.phone;
          state.loginResponse.data.barber.location = payload.data.location;
          state.loginResponse.data.barber.working_hours =
            payload.data.working_hours;
          state.loginResponse.data.barber.birth_date = payload.data.birth_date;
        },
      );
  },
});

export const { actions: barberLoginAction } = barberLoginSlice;
export const { reducer: barberLoginReducer } = barberLoginSlice;
