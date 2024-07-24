import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { AddServiceResponse } from '~shared';
import { addServices } from './addServiceThunk';
import { barberLogin } from '../barberLogin';

interface AddServiceState {
  loading: boolean;
  isRejected: SerializedError | null;
  updateResponse: AddServiceResponse | null;
  service: {
    name: string;
    price: number;
  }[];
}

const initialState: AddServiceState = {
  updateResponse: null,
  loading: false,
  isRejected: null,
  service: [],
};

export const addServicesSlice = createSlice({
  name: 'addServices',
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.service = action.payload;
    },
    clear: state => {
      state.updateResponse = initialState.updateResponse;
      state.isRejected = initialState.isRejected;
      state.loading = initialState.loading;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addServices.pending, state => {
        state.loading = true;
      })
      .addCase(
        addServices.fulfilled,
        (state, { payload }: PayloadAction<AddServiceResponse>) => {
          state.loading = false;
          state.updateResponse = payload;
        },
      )
      .addCase(addServices.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      })
      .addCase(barberLogin.fulfilled, (state, action) => {
        state.service = action.payload.data.barber.services || [];
      });
  },
});

export const { actions: addServicesAction } = addServicesSlice;
export const { reducer: addServicesReducer } = addServicesSlice;
