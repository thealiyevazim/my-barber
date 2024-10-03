import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { BarberUpdateDataResponse } from '~shared';
import { barberUpdate } from './barberUpdateThunk';

interface BarberUpdateState {
  loading: boolean;
  isRejected: SerializedError | null;
  updateResponse: BarberUpdateDataResponse | null;
}

const initialState: BarberUpdateState = {
  updateResponse: null,
  loading: false,
  isRejected: null,
};

export const barberUpdateSlice = createSlice({
  name: 'barberUpdate',
  initialState,
  reducers: {
    clear: state => {
      state.updateResponse = initialState.updateResponse;
      state.isRejected = initialState.isRejected;
      state.loading = initialState.loading;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(barberUpdate.pending, state => {
        state.loading = true;
      })
      .addCase(
        barberUpdate.fulfilled,
        (state, { payload }: PayloadAction<BarberUpdateDataResponse>) => {
          state.loading = false;
          state.updateResponse = payload;
        },
      )
      .addCase(barberUpdate.rejected, (state, action) => {
        state.loading = false;
        state.isRejected = action.error;
      });
  },
});

export const { actions: barberUpdateAction } = barberUpdateSlice;
export const { reducer: barberUpdateReducer } = barberUpdateSlice;
